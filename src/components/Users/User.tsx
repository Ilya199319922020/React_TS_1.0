import { NavLink } from 'react-router-dom';

const User: React.FC<any> = ({ name, address, company, ...props }) => {

	const onIsSortedByCity = (): void => {
		props.setIsSortedByCity(true);
		props.setIsSortedByCompany(false);
	}
	const onIsSortedByCompany = (): void => {
		props.setIsSortedByCompany(true);
		props.setIsSortedByCity(false);
	}
	return (
		<div >
			<div>
				<span>Сортировка</span>
				<button onClick={onIsSortedByCity}>по городу</button>
				<button onClick={onIsSortedByCompany}>по компании</button>
			</div>
			<div>
				<div>{name}</div>
				<div>{address.city}</div>
				<div>{company.name}</div>
				<div>
					<span></span>
					<NavLink to=''>Подробнее</NavLink>
				</div>
			</div>
		</div>
	);
};



export default User;
