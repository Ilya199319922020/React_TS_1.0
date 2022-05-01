import { connect } from "react-redux";
import { fetchUsers } from "../../store/reducers/userReducer";
import { NavLink } from 'react-router-dom';



const User: React.FC<any> = ({ name, address, company, ...props }) => {
	return (
		<div >
			<div>
				<span>Сортировка</span>
				<button>по городу</button>
				<button>по компании</button>
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
