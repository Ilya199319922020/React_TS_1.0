import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, Reducers } from "../reduxStore";

const initialState: UsersState = {
	loading: false,
	users: [],
	//isSortedByCity: false,
	//isSortedByCompany: false,
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
		// case "SORT_USERS"
		// 	return {
		// 		...state, 
		// 		loading: false,
		// 	}

		default:
			return state;
	}
};
type UsersAction = ActionsTypes<typeof actions>

export const actions = {
	setFetchUsers: () => ({ type: 'FETCH_USERS', } as const),
	setFetchUsersSuccess: (users: Array<any>) => ({ type: 'FETCH_USERS_SUCCESS', users } as const),
};

type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>



export const fetchUsers = (): ThunkType => {
	return async (dispatch, getState) => {
		dispatch(actions.setFetchUsers())
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data);
		dispatch(actions.setFetchUsersSuccess(response));
	}
};

export default userReducer;