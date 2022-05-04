import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileUser from './ProfileUser/ProfileUser';

const User: React.FC<any> = ({ name, address, company, user, ...props }) => {

	const [isProfileUser, setIsProfileUser] = useState<boolean>(false);

	const onIsSortedByCity = (): void => {
		props.setIsSortedByCity(true);
		props.setIsSortedByCompany(false);
	}
	const onIsSortedByCompany = (): void => {
		props.setIsSortedByCompany(true);
		props.setIsSortedByCity(false);
	}

	const onIsProfileUser = (): void => {
		setIsProfileUser(true);
	};

	return (
		<div >
			<div>
				<span>Сортировка</span>
				<button onClick={onIsSortedByCity}>по городу</button>
				<button onClick={onIsSortedByCompany}>по компании</button>
			</div>
			<div>
				{!isProfileUser
					? <div>
						<div>{name}</div>
						<div>{address.city}</div>
						<div>{company.name}</div>
						<div>
							<span></span>
							<NavLink onClick={onIsProfileUser} to=''>Подробнее</NavLink>
						</div>
					</div>
					: <ProfileUser name={name} />}
			</div>
		</div>
	);
};



export default User;
