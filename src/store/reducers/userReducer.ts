import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, Reducers } from "../reduxStore";

const initialState: UsersState = {
	loading: false,
	users: [],
	};

export interface UsersState {
	loading: boolean,
	users: Array<any>,
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
				loading: false, users: action.users
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

		default:
			return state;
	}
};
type UsersAction = ActionsTypes<typeof actions>

export const actions = {
	setFetchUsers: () => ({ type: 'FETCH_USERS', } as const),
	setFetchUsersSuccess: (users: Array<any>) => ({ type: 'FETCH_USERS_SUCCESS', users } as const),
	setFetchUsersSortCity: (users: Array<any>) => ({ type: 'SORT_USERS_CITY', users } as const),
	setFetchUsersSortCompany: (users: Array<any>) => ({ type: "SORT_USERS_COMPANY", users } as const)

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


export default userReducer;