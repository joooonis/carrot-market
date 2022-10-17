import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email?: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });

  const onValid = (data: LoginForm) => {
    console.log(data);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  console.log(watch());

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
        {...register('password', {
          required: 'Password is required',
        })}
        placeholder="password"
      />
      <input
        type="email"
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value?.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        placeholder="email"
      />
      <div className="ml-3 text-sm text-red-500">{errors.email?.message}</div>
      <input
        className="border border-gray-500 py-2 bg-black text-white"
        type="submit"
        value="create account"
      />
      {errors.errors?.message}
    </form>
  );
}
