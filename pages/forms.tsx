import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email?: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {
    console.log(data);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col">
      <input
        {...register('username', {
          required: 'Email is required',
          minLength: {
            message: 'The username should be longer than 5 chars',
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      <input
        type="password"
        {...register('password', { required: 'Password is required' })}
        placeholder="password"
      />
      <input type="email" {...register('email', {})} placeholder="email" />
      <input
        className="border border-gray-500 py-2 bg-black text-white"
        type="submit"
        value="create account"
      />
    </form>
  );
}
