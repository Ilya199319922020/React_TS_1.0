import { ThunkAction } from "redux-thunk";
import { Reducers } from "../store/reduxStore";

export enum UsersActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
	type: UsersActionTypes.FETCH_USERS,
};

export interface FetchUsersSuccessAction {
	type: UsersActionTypes.FETCH_USERS_SUCCESS,
	payload: Array<any>
};

export interface FetchUsersActionError {
	type: UsersActionTypes.FETCH_USERS_ERROR,
	payload: string
};

export interface UsersState {
	users: Array<any>,
	loading: boolean,
	error: null | string,
};

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersActionError;

export type ThunkType = ThunkAction<Promise<void>, Reducers, unknown, UsersAction>