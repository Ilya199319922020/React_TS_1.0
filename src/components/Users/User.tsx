import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileUser from './ProfileUser/ProfileUser';

const User: React.FC<any> = ({ name, address, company, user, currentIdProfile, ...props }) => {

	const onIsSortedByCity = (): void => {
		props.setIsSortedByCity(true);
		props.setIsSortedByCompany(false);
	};
	const onIsSortedByCompany = (): void => {
		props.setIsSortedByCompany(true);
		props.setIsSortedByCity(false);
	};

	const onCurrentId = (): void => {
		props.setCurrentIdProfile(user.id);
	};

	return (
		<div >
			<div>
				<span>Сортировка</span>
				<button onClick={onIsSortedByCity}>по городу</button>
				<button onClick={onIsSortedByCompany}>по компании</button>
			</div>
			<div>
				{currentIdProfile
					? <ProfileUser name={name} />
					: <div>
						<div>{name}</div>
						<div>{address.city}</div>
						<div>{company.name}</div>
						<div>
							<span></span>
							<NavLink onClick={onCurrentId} to=''>Подробнее</NavLink>
						</div>
					</div>}

			</div>
		</div>
	);
};

export default User;
