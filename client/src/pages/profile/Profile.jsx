import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../lib/providers/user.providers';
import { PrimaryButton } from '../../components/ui/buttons/Buttons';
import { getFavorites, URL_BASE } from '../../lib/utils/user-api';
import {
	StyledAchievementsandPoints,
	StyledAchievementsandPointsContainer,
	StyledGrid,
	StyledMainContainerConnect,
	StyledMyinfoContainer,
	StyledMyInfoDiv,
	StyledProfileImg,
	StyledSectionsContainer
} from './profile-styles';
import Header from '../../components/header/Header';
import ProfileSections from '../../components/ui/profile-sections/ProfileSections';
import Footer from '../../components/footer/Footer';
import NoUser from '../../components/user-profile/UserLogout';
import { GamePreview } from '../../components/ui/game-cards/GameCards';
import { useEffect, useState } from 'react';

const Profile = () => {
	const { user, setUser, isLogged } = useUserContext();
	const [favoriteGames, setFavoriteGames] = useState([]);
	const navigate = useNavigate();

	if (!isLogged()) {
		return <NoUser />;
	}

	if (!user || !user.profilePicture) {
		return <div>Loading...</div>;
	}

	useEffect(() => {
		const getFavoriteGames = async () => {
			const games = await getFavorites(user._id);
			console.log(games);
			setFavoriteGames(games);
		};
		getFavoriteGames();
	}, [user]);
	//console.log(favoriteGames);

	return (
		<StyledMainContainerConnect>
			<Header />
			<StyledSectionsContainer>
				{/* SECCION DE FOTO */}
				<div bg={user?.profilePicture.backgroundColor}>
					<StyledProfileImg
						src={user.profilePicture.img}
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
					<StyledGrid>
						{Array.isArray(favoriteGames) &&
							favoriteGames.map(game => (
								<GamePreview
									key={game.id}
									name={game.name}
									slug={game.slug}
									thumbnail={game.thumbnail}
								/>
							))}
					</StyledGrid>
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
				<PrimaryButton action={() => logout(setUser, navigate)}>
					Log out
				</PrimaryButton>
			</StyledSectionsContainer>
			<Footer />
		</StyledMainContainerConnect>
	);
};

const logout = (setUser, navigate) => {
	//	console.log('se esta desconectando')
	setUser(null);
	localStorage.removeItem('user');
	sessionStorage.removeItem('user');
	navigate('/');
};

export default Profile;
