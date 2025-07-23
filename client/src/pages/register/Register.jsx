import { useForm } from "react-hook-form";
import { registerUser } from "../../lib/utils/user-api";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    const response = registerUser
    return response.data
  }


  return (<>
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <h4>Welcome to Nintendo!</h4>
        <span>we want to know more about you! So, can you tell us when is your birthday?</span>
        <label htmlFor="birthday" />
        <input
          id="birthday"
          name="birthday"
          type="date"
          {...register("birthday", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="nickname"
          name="nickname"
          type="text"
          {...register("nickname", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="region">Region</label>
        <input
          id="region"
          name="region"
          type="dropdown"
          {...register("region", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...register("password", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="repeatPassword"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    );
  </>);
};


// 				<StyledForm onSubmit={registerUser}>
// 					<h2>Crear Cuenta</h2>
// 					<input type='text' name='name' placeholder='Name' />
// 					<input type='text' name='email' placeholder='email' />
// 					<input type='password' name='password' placeholder='password' />
// 					<button type='submit'>Registrarse</button>
// 				</StyledForm>



// const Register = () => {
//   const { setUser } = useUserContext();

//   const submitForm = async (data) => {
//     try {
//       const newUser = await registerUser(data);
//       setUser(newUser); // ← guarda al usuario recién registrado
//     } catch (error) {
//       console.error('Registration failed:', error.response?.data || error);
//     }
//   };

export default Register;
