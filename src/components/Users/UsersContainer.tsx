import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/reducers/userReducer";
import { Reducers } from "../../store/reduxStore";

type PropsUsers = {
	loading: boolean,
	users: Array<any>,
	fetchUsers: () => void,
};

const UsersContainer: React.FC<PropsUsers> = (props) => {

	console.log(props.users)

	useEffect(() => {
		props.fetchUsers()
	}, []);

	return (
		<div>
			{ }
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
