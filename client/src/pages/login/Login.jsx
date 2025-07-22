import { useUserContext } from '../../lib/providers/user.providers';
import { TextInput, TextInputPassword } from '../../components/ui/inputs/Inputs';
import { login } from '../../lib/utils/user-api';
import { useState } from 'react';


const Login = () => {
	const [error, setError] = useState('')

	const submitForm = async(data) => {
		try {
			const response = await login(data)
		} catch (error) {
			setError(error.response.data.message)
		}
	}


	return (<>
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
		<h3>Let the adventure continue!</h3>

		<form>
			<TextInput
			label=""
			value={value}
			onChange={(e) => setValue(e.target.value)}  
			/>
			<TextInputPassword
				label="Password"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
{error && <div>
	{error}
	</div>}
	</>)
};

export default Login;


//Error log in, it might be the password or email