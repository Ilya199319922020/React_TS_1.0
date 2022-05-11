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
				<h1>Профиль пользователя</h1>
				<button onClick={onSetIisSubmitted}>Редактировать</button>
			</header>
			<ProfileForm profileInfo={profileInfo} isSubmitted={isSubmitted} />
		</div>
	);
};

export default ProfileUser;