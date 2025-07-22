import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../lib/providers/user.providers';
import { PrimaryButton } from '../../components/ui/buttons/Buttons';

const Profile = () => {
	const { user } = useUserContext();
	const navigate = useNavigate();

	if (!user) {
		return (
			<section>
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/profile/no-user-nintendo-characters-tablet.png"
					/>
					<source
						media="(min-width: 768px) and (max-width: 1023px)"
						srcSet="/profile/no-user-nintendo-characters-tablet.png"
					/>
					<source
						media="(min-width: 380px)"
						srcSet="/profile/no-user-nintendo-characters-mobile.png"
					/>
					<img
						src="/profile/no-user-nintendo-characters-mobile.png"
						alt="User not connected, photo of Nintendo characters"
					/>
				</picture>
				<div>
					<h3>Ready to play?</h3>
					<h4>Log in or sign up to access your Nintendo World</h4>
				</div>
				<Link to="/login">
					<PrimaryButton>Log in</PrimaryButton>
				</Link>
				<PrimaryButton onClick={() => navigate('/signup')}>Sign up</PrimaryButton>
			</section>
		);
	}

	return (
		<section>
			<h2>Welcome, {user.name || user.email}!</h2>
			{/* Aquí puedes poner más info del perfil */}
		</section>
	);
};

// const logout = async navigate => {
// 	await signOut(auth);
// 	navigate('/');
// };

// const updateUser = async (id, setUser, event, setIsEditing) => {
// 	event.preventDefault();
// 	const form = event.target;

// 	const body = {
// 		name: form.name.value
// 	};

// 	const userUpdated = await updateDataById(id, body);
// 	setUser(userUpdated);
// 	setIsEditing(false);
// };
export default Profile;
