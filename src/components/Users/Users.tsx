import { useState } from 'react';
import ProfileUser from './ProfileUser/ProfileUser';
import User from './User/User';
import style from './Users.module.scss';

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
		.map((u: any) => <ProfileUser key={u.id} profileInfo={u} />);

	return (
		<div className={style.users}>
			<nav className={style.users__navbar}>
				<span >Сортировка</span>
				<button onClick={onIsSortedByCity} >по городу</button>
				<button onClick={onIsSortedByCompany}>по компании</button>
			</nav >

			<main className={style.users__main}>
				<div>
					<h1>Список пользователей</h1>
					<div className={style.users__main_item}>
						{currentIdProfile
							? user
							: userList}
					</div>
				</div>
				<span className={style.users__main_countUser}>
					Найдено {users.length} пользователей
				</span>
			</main>
		</div>
	);
};


export default Users;
