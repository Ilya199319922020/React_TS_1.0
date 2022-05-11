import { useState } from 'react';
import ProfileUser from './ProfileUser/ProfileUser';
import User from './User/User';

const Users: React.FC<any> = ({ users, userProfile, currentIdProfile, setCurrentIdProfile, ...props }) => {

	const onIsSortedByCity = (): void => {
		props.setIsSortedByCity(true);
		props.setIsSortedByCompany(false);
	};
	const onIsSortedByCompany = (): void => {
		props.setIsSortedByCompany(true);
		props.setIsSortedByCity(false);
	};

	const userList = users.map((user: any) => <User
		name={user.name}
		address={user.address}
		company={user.company}
		id={user.id}
		setCurrentIdProfile={setCurrentIdProfile}
		key={user.id}
	/>);

	const user = userProfile
		.map((u: any) => <ProfileUser key={u.id} profileInfo={u}/>);

	return (
		<div >
			<div>
				<span>Сортировка</span>
				<button onClick={onIsSortedByCity}>по городу</button>
				<button onClick={onIsSortedByCompany}>по компании</button>
			</div>
			<div>
				{currentIdProfile
					? user
					: userList}
			</div>
		</div>
	);
};


export default Users;
