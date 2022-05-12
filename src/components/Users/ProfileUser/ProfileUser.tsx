import { useState } from 'react';
import ProfileForm from './ProfileForm/ProfileForm';

const ProfileUser: React.FC<{ [key: string]: any }> = ({ profileInfo }) => {
	const [isSubmitted, setIisSubmitted] = useState(true);

	const onSetIisSubmitted = (): void => {
		setIisSubmitted(isSubmitted => !isSubmitted)
	}
	return (
		<div >
			<header>
				<h2>Профиль пользователя</h2>
				<button onClick={onSetIisSubmitted}>Редактировать</button>
			</header>
			<ProfileForm profileInfo={profileInfo} isSubmitted={isSubmitted} />
		</div>
	);
};

export default ProfileUser;