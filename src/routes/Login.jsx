import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

import FormError from '../components/FormError';
import FormInput from '../components/FormInput';

const Login = () => {
  // const [email, setEmail] = useState('hega1@test.com');
  // const [password, setPassword] = useState('123123');

  const { loginUser } = useContext(UserContext);
  const navegate = useNavigate();
  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: 'hega1@test.com',
      password: '123123',
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate('/');
    } catch (error) {
      console.log(error.code);
      setError('firebase', {
        message: erroresFirebase(error.code),
      });
    }
  };

  return (
    <>
      <h1>Login </h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register('email', {
            required,
            pattern: patternEmail,
          })}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register('password', {
            minLength,
            validate: validateTrim,
          })}
        >
          <FormError error={errors.password} />
        </FormInput>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
