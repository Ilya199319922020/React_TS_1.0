import { NavLink } from "react-router-dom";
import style from './User.module.scss';

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
		<div className={style.user}>

			<div className={style.user__listInfo}>

				<ul className={style.user__listInfo_itemElement}>
					<li>
						Ф.И.О.: <span>{name}</span>
					</li>
					<li>
						город: <span>{address.city}</span>
					</li>
					<li>
						компания: <span>{company.name}</span>
					</li>
				</ul>

				<div className={style.user__listInfo_btnDetail}>
					<NavLink onClick={onCurrentId} to={`/profile/${id}`}>Подробнее</NavLink>
				</div>
			</div>

		</div>
	)

}

export default User;