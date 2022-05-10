import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchUsersSort } from "../../store/reducers/userReducer";
import { Reducers } from "../../store/reduxStore";
import ProfileUser from "./ProfileUser/ProfileUser";
import User from "./User";

interface PropsUsers {
	loading: boolean,
	users: Array<any>,
	fetchUsers: () => void,
	fetchUsersSort: (isSortedByCity: boolean, isSortedByCompany: boolean) => void
};

const UsersContainer: React.FC<PropsUsers> = ({ users, loading, ...props }) => {

	const [isSortedByCity, setIsSortedByCity] = useState(false);
	const [isSortedByCompany, setIsSortedByCompany] = useState(false);
	const [currentIdProfile, setCurrentIdProfile] = useState<null | number>(null);

	useEffect(() => {
		props.fetchUsers();
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

	if (loading) {
		return <b>Идёт загрузка...</b>
	}

	const userList = users.map(user => <User
		user={user}
		name={user.name}
		address={user.address}
		company={user.company}
		key={user.id}
		setIsSortedByCity={setIsSortedByCity}
		setIsSortedByCompany={setIsSortedByCompany}
		setCurrentIdProfile={setCurrentIdProfile}
		currentIdProfile={currentIdProfile}
	/>);

	return (
		<>
			{!currentIdProfile
				? userList
				: [...users].filter(u => u.id === currentIdProfile)
					.map(profile => <ProfileUser key={profile.id} />)}
		</>
	);
};

const mapStateToProps = (state: Reducers) => {
	return {
		users: state.users.users,
		loading: state.users.loading,
	}
};

export default connect(mapStateToProps, { fetchUsers, fetchUsersSort })(UsersContainer);
