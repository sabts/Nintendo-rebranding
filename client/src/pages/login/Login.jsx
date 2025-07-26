import { TextInput, TextInputPassword } from '../../components/ui/inputs/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../lib/utils/user-api';
import { useUserContext } from '../../lib/providers/user.providers';
import { useState } from 'react';
import { StyledError, StyledForm, StyledMainContainer, StyledPhoto, StyledRedirection } from './login-styles';
import { PrimaryButton } from '../../components/ui/buttons/Buttons';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Login = () => {
	const { setUser } = useUserContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const response = await login({ email, password });
			setUser(response)
			console.log('Login successful:', response);
			navigate('/profile');
		} catch (error) {
			setError(error.response?.data?.message || 'Login failed');
		}
	};

	return (<>
	<Header/>
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
			<StyledPhoto
				src="/profile/no-user-nintendo-characters-mobile.png"
				alt="User not connected, photo of Nintendo characters"
			/>
		</picture>
		<StyledMainContainer>
			<h3>Let the adventure continue!</h3>
			<StyledForm onSubmit={submitForm}>
				<TextInput
					label="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextInputPassword
					label="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<PrimaryButton type="submit">Login</PrimaryButton>
			</StyledForm>
			{error && <StyledError>{error}</StyledError>}

			<Link to="/register">
< StyledRedirection>You don’t have an account?</ StyledRedirection>
			</Link>
		</StyledMainContainer>
		<Footer/>
	</>
	);
};


export default Login;


//Error log in, it might be the password or email