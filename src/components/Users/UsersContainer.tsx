import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/reducers/userReducer";
import { Reducers } from "../../store/reduxStore";
import User from "./User";

interface PropsUsers {
	loading: boolean,
	users: Array<any>,
	fetchUsers: () => void,
};

const UsersContainer: React.FC<PropsUsers> = ({ users, loading, ...props }) => {

	useEffect(() => {
		props.fetchUsers()
	}, []);
	const userList = users.map(user => <User
		name={user.name}
		address={user.address}
		company={user.company}
	/>)
	console.log(userList)
	return (
		<div>
			{userList}
		</div>
	);
};

const mapStateToProps = (state: Reducers) => {
	return {
		users: state.users.users,
		loading: state.users.loading,
	}
};

export default connect(mapStateToProps, { fetchUsers })(UsersContainer);
