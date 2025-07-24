import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../lib/providers/user.providers';
import {
	PrimaryButton,
	SecondaryButton
} from '../../components/ui/buttons/Buttons';
import { URL_BASE } from '../../lib/utils/user-api';
import {
	StyledAchievementsandPoints,
	StyledAchievementsandPointsContainer,
	StyledMainContainer,
	StyledMainContainerConnect,
	StyledMyinfoContainer,
	StyledMyInfoDiv,
	StyledPhoto,
	StyledProfileImg,
	StyledSectionsContainer
} from './profile-styles';
import Header from '../../components/header/Header';
import ProfileSections from '../../components/ui/profile-sections/ProfileSections';
import Footer from '../../components/footer/Footer';

const Profile = () => {
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();

	if (!user) {
		return (
			<section>
				<picture>
					<source
						media='(min-width: 1024px)'
						srcSet='/profile/no-user-nintendo-characters-tablet.png'
					/>
					<source
						media='(min-width: 768px) and (max-width: 1023px)'
						srcSet='/profile/no-user-nintendo-characters-tablet.png'
					/>
					<source
						media='(min-width: 380px)'
						srcSet='/profile/no-user-nintendo-characters-mobile.png'
					/>
					<StyledPhoto
						src='/profile/no-user-nintendo-characters-mobile.png'
						alt='User not connected, photo of Nintendo characters'
					/>
				</picture>
				<StyledMainContainer>
					<div>
						<h3>Ready to play?</h3>
						<h4>Log in or sign up to access your Nintendo World</h4>
					</div>
					<Link to='/login'>
						<PrimaryButton>Log in</PrimaryButton>
					</Link>
					<SecondaryButton
						$isBackgroundDark={false}
						onClick={() => navigate('/signup')}
					>
						Sign up
					</SecondaryButton>
				</StyledMainContainer>
			</section>
		);
	}

	return (
		<StyledMainContainerConnect>
			<Header />
			<StyledSectionsContainer>
				{/* SECCION DE FOTO */}
				<div bg={user.profilePicture.backgroundColor}>
					<StyledProfileImg
						src={URL_BASE + user.profilePicture.img}
						alt={`${user.username}`}
						bg={user?.profilePicture?.backgroundColor}
					/>
				</div>

				<h2>Hi!, {user.nickname}!</h2>
			</StyledSectionsContainer>

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
			<StyledSectionsContainer>
				<ProfileSections icon='/icons/user-icon-profile.svg' title='My info'>
					<StyledMyinfoContainer>
						<StyledMyInfoDiv>
							<strong>Nickname:</strong> <p>{user.nickname}</p>
						</StyledMyInfoDiv>
						<StyledMyInfoDiv>
							<strong>Name:</strong> <p>{user.name}</p>
						</StyledMyInfoDiv>
						<StyledMyInfoDiv>
							<strong>Usercode:</strong> <p>{user.userCode}</p>
						</StyledMyInfoDiv>
						<StyledMyInfoDiv>
							<strong>Region:</strong> <p>{user.region}</p>
						</StyledMyInfoDiv>
					</StyledMyinfoContainer>
				</ProfileSections>

				<ProfileSections
					icon='/icons/games-icon-profile.svg'
					title={`${user.nickname}´s games`}
				>
					{/* {user.gamesOwned?.list.map(game => (
    <p key={game.id}>{game.title}</p>
  ))} */}
				</ProfileSections>

				<ProfileSections
					icon='/icons/favorite-icon-profile.svg'
					title='Favorites'
				>
					{/* {user.favorites.map(game => (
    <p key={game.id}>{game.title}</p>
  ))} */}
				</ProfileSections>

				<ProfileSections icon='/icons/friends-icon.svg' title='Friends'>
					<div>
						<h5>Friends ({user.friends.accepted.length})</h5>
						{/* {user.friends.accepted.map(friend => (
      <p key={friend.id}>{friend.name}</p>
    ))} */}
					</div>
					<div>
						<h5>Friend requests ({user.friends.requests.length})</h5>
						{/* {user.friends.requests.map(request => (
      <p key={request.id}>{request.name}</p>
    ))} */}
					</div>
				</ProfileSections>
				<PrimaryButton onClick={() => logout(setUser, navigate)}>
					Log out
				</PrimaryButton>
			</StyledSectionsContainer>
			<Footer />
		</StyledMainContainerConnect>
	);
};

// const logout = async navigate => {
// 	await signOut(auth);
// 	navigate('/');
// };

const logout = (setUser, navigate) => {
	setUser();
	localStorage.removeItem('user');
	sessionStorage.removeItem('user');
	navigate('/');
};

export default Profile;
