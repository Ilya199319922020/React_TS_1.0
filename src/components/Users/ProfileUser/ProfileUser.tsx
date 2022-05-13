import ProfileForm from './ProfileForm/ProfileForm';
interface PropsProfileUser {
	profileInfo: { [key: string]: any },
	isSubmitted: boolean,
}

const ProfileUser: React.FC<PropsProfileUser> = ({ profileInfo, isSubmitted }) => {
	return (
		<div >
			<ProfileForm profileInfo={profileInfo} isSubmitted={isSubmitted} />
		</div>
	);
};

export default ProfileUser;