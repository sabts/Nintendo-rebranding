import { useUserContext } from '../../lib/providers/user.providers';
import { TextInputPassword } from '../../components/ui/inputs/Inputs';


const Login = () => {
	const { user } = useUserContext()

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

		<div>
			<TextInputPassword
				label="Password"
				value={value}
				onChange={(e) => setValue(e.target.value)}  // Update state when user types
			/>
		</div>

	</>)
};

export default Login;
