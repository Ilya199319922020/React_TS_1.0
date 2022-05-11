import { NavLink } from "react-router-dom";

interface PropsUser {
	id: Number,
	name: String,
	address: { [key: string]: string },
	company: { [key: string]: string },
	setCurrentIdProfile: (id: Number) => void,
	}

const User: React.FC<PropsUser> = ({ id, name, address, company, ...props }) => {
	
	const onCurrentId = (): void => {
		props.setCurrentIdProfile(id);
	};

	return (
		<div>
			<div>{name}</div>
			<div>{address.city}</div>
			<div>{company.name}</div>
			<div>
				<span></span>
				<NavLink onClick={onCurrentId} to=''>Подробнее</NavLink>
			</div>
		</div>
	)
}

export default User;