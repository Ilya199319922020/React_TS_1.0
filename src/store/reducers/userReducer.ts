import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, Reducers } from "../reduxStore";

const initialState: UsersState = {
	loading: false,
	users: [],
	userProfile: [],
	
};

export interface UsersState {
	loading: boolean,
	users: Array<any>,
	userProfile: Array<any>,
};

const userReducer = (state = initialState, action: UsersAction): UsersState => {

	switch (action.type) {
		case 'FETCH_USERS':

			return {
				...state,
				loading: true, users: []
			}
		case 'FETCH_USERS_SUCCESS':

			return {
				...state,
				loading: false,  users: action.users
			}

		case "SORT_USERS_CITY":
			return {
				...state,
				loading: false,
				users: action.users.sort((a, b) => (a.address.city > b.address.city)
					? 1 : ((b.address.city > a.address.city)
						? -1 : 0))
			}
		case "SORT_USERS_COMPANY":
			return {
				...state,
				loading: false,
				users: action.users.sort((a, b) => (a.company.name > b.company.name)
					? 1 : ((b.company.name > a.company.name)
						? -1 : 0))
			}
		case 'FETCH_USER_PROFILE':
			return {
				...state,
				loading: false,
				userProfile: state.users.filter(u => (u.id === action.currentIdProfile))
			}
		case 'REFRESH_USER_PROFILE':
			return {
				...state,
				loading: true,  userProfile: []
			}
		case 'REFRESH_USER_PROFILE_SUCCESS':
			return {
				...state,
				loading: false,  userProfile: [action.userProfile],
			}
		default:
			return state;
	}
};
type UsersAction = ActionsTypes<typeof actions>

export const actions = {
	setFetchUsers: () => ({ type: 'FETCH_USERS', } as const),
	setFetchUsersSuccess: (users: Array<any>) => ({ type: 'FETCH_USERS_SUCCESS', users } as const),
	setFetchUsersSortCity: (users: Array<any>) => ({ type: 'SORT_USERS_CITY', users } as const),
	setFetchUsersSortCompany: (users: Array<any>) => ({ type: "SORT_USERS_COMPANY", users } as const),
	setUserProfile: (currentIdProfile: number | string) => ({ type: 'FETCH_USER_PROFILE', currentIdProfile } as const),
	setRefrechUserProfile: () => ({ type: 'REFRESH_USER_PROFILE', } as const),
	setRefrechUserProfileSuccess: (userProfile: { [key: string]: any }) => ({ type: 'REFRESH_USER_PROFILE_SUCCESS', userProfile } as const),
};

type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>

export const fetchUsers = (): ThunkType => {
	return async (dispatch) => {
		dispatch(actions.setFetchUsers())
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data);
		dispatch(actions.setFetchUsersSuccess(response));
	}
};

export const fetchUsersSort = (isSortedByCity: boolean, isSortedByCompany: boolean): ThunkType => {
	return async (dispatch) => {
		dispatch(actions.setFetchUsers())
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data);
		if (isSortedByCity) {
			dispatch(actions.setFetchUsersSortCity(response));
		}
		if (isSortedByCompany) {
			dispatch(actions.setFetchUsersSortCompany(response))
		}
	}
};

export const fetchUserProfile = (currentIdProfile: number|string): ThunkType => {
	return async (dispatch) => {
		dispatch(actions.setUserProfile(currentIdProfile))
	}
};

export const fetchRefrechUserProfileSuccess = (currentIdProfile: string): ThunkType => {
	return async (dispatch) => {
		dispatch(actions.setRefrechUserProfile());
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${currentIdProfile}`)
			.then(res => res.data);
		dispatch(actions.setRefrechUserProfileSuccess(response));

	}
};

export default userReducer;