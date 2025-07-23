import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../lib/providers/user.providers';
import { PrimaryButton } from '../../components/ui/buttons/Buttons';
import { URL_BASE } from '../../lib/utils/user-api';
import { StyledAchievementsandPoints, StyledAchievementsandPointsContainer } from './profile-styles';
import Header from '../../components/header/Header';

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
		<>
			<Header />
			<section>
				{/* SECCION DE FOTO */}
				<div bg={user.profilePicture.backgroundColor}>
					<img
						src={URL_BASE + user.profilePicture.img}
						alt={`${user.username}`}
					/>
				</div>

				<h2>Hi!, {user.nickname}!</h2>
			</section>

			{/* SECCION DE PUNTOS Y LOGROS */}
			<StyledAchievementsandPointsContainer>
				<StyledAchievementsandPoints>
					<img src='/icons/points icon.svg' alt='Points' />
					<span>Points</span>
					<span>{user?.points ?? 0}</span>
				</StyledAchievementsandPoints>
				<StyledAchievementsandPoints>
					<img src='/icons/achievements icon.svg' alt='Achievements icon' />
					<span>Achievements</span>
					<span>{user?.gamesOwned?.gameAchievements ?? 0}</span>
				</StyledAchievementsandPoints>
			</StyledAchievementsandPointsContainer>
			{/* SECCION DE INFO */}
			<section>
				<div>
					<img src='/icons/user-icon-profile.svg' />
					<h4>My info</h4>
				</div>
				<div>
					<img src='/icons/games-icon-profile.svg' />
					<h4>{user.nickname}´s games </h4>
					{/* MAP DE LOS JUEGOS */}
				</div>
				<div>
					<img src='/icons/favorite-icon-profile.svg' />
					<h4>Favorites </h4>
					{/* MAP DE FAVORITOS */}
				</div>
				<div>
					<img src='/icons/friends-icon.svg' />
					<h4>Friends</h4>
					<div>
						<h5>Friends ({user.friends.accepted.length})</h5>
						{/* MAP DE AMIGOS */}
					</div>
					<div>
						<h5>Friends request ({user.friends.requests.length})</h5>
						{/* MAP DE REQUESTS */}
					</div>
				</div>
			</section>
			<PrimaryButton>Log out</PrimaryButton>
		</>
	);
};

const logout = async navigate => {
	await signOut(auth);
	navigate('/');
};

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
