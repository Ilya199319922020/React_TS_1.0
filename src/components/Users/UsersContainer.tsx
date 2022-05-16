import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers, fetchUsersSort, fetchUserProfile, fetchRefrechUserProfileSuccess } from "../../store/reducers/userReducer";
import { Reducers } from "../../store/reduxStore";
import Users from "./Users";

interface PropsUsers {
	loading: boolean,
	users: Array<any>,
	userProfile: Array<any>,
	fetchUsers: () => void,
	fetchUsersSort: (isSortedByCity: boolean, isSortedByCompany: boolean) => void,
	fetchUserProfile: (currentIdProfile: number | string) => void,
	fetchRefrechUserProfileSuccess: (userId: string) => void,
};

const UsersContainer: React.FC<PropsUsers> = ({ users, loading, userProfile, ...props }) => {

	const [isSortedByCity, setIsSortedByCity] = useState(false);
	const [isSortedByCompany, setIsSortedByCompany] = useState(false);
	const [currentIdProfile, setCurrentIdProfile] = useState<null | number | string>(null);

	const { userId } = useParams() as any;
	
	useEffect(() => {
		if (userId) {
			 props.fetchRefrechUserProfileSuccess(userId);
			setCurrentIdProfile(userId);
		}
	}, [userId]);

	useEffect(() => {
		if (!userId) {
			props.fetchUsers();
		}
	}, []);

	useEffect(() => {
		if (isSortedByCity) {
			props.fetchUsersSort(isSortedByCity, isSortedByCompany);
		}
	}, [isSortedByCity]);

	useEffect(() => {
		if (isSortedByCompany) {
			props.fetchUsersSort(isSortedByCity, isSortedByCompany)
		}
	}, [isSortedByCompany]);

	useEffect(() => {
		if (currentIdProfile) {
			props.fetchUserProfile(currentIdProfile);
		}
	}, [currentIdProfile])

	if (loading) {
		return <b>Идёт загрузка...</b>
	}

	return (
		<>
			<Users
				users={users}
				userProfile={userProfile}
				setIsSortedByCity={setIsSortedByCity}
				setIsSortedByCompany={setIsSortedByCompany}
				setCurrentIdProfile={setCurrentIdProfile}
				currentIdProfile={currentIdProfile}
			/>
		</>
	);
};

const mapStateToProps = (state: Reducers) => {
	return {
		users: state.users.users,
		loading: state.users.loading,
		userProfile: state.users.userProfile,
	}
};

export default connect(mapStateToProps, { fetchUsers, fetchUsersSort, fetchUserProfile, fetchRefrechUserProfileSuccess })(UsersContainer);
