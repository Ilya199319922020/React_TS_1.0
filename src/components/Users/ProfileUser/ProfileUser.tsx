import ProfileForm from './ProfileForm/ProfileForm';

const ProfileUser: React.FC<{ [key: string]: any }> = ({ profileInfo, ...props }) => {

	return (
		<div >
			<header>
				<h1>Профиль пользователя</h1>
				<button>Редактировать</button>
			</header>
			<ProfileForm profileInfo={profileInfo} />
		</div>
	);
};

export default ProfileUser;