import ProfileForm from './ProfileForm/ProfileForm';
interface PropsProfileUser {
	profileInfo: { [key: string]: any },
	isSubmitted: boolean,
}

const ProfileUser: React.FC<PropsProfileUser> = ({ profileInfo, isSubmitted }) => {
	return (
		<>
			<ProfileForm profileInfo={profileInfo} isSubmitted={isSubmitted} />
		</>
	);
};

export default ProfileUser;