import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onValid = () => {
    console.log(register);
  };
  const onInvalid = () => {
    console.log('error!');
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col">
      <input
        {...register('username', { required: true })}
        type="text"
        placeholder="username"
      />
      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="email"
      />
      <input
        type="password"
        {...register('password', { required: true })}
        placeholder="password"
      />
      <input
        className="border border-gray-500 py-2 bg-black text-white"
        type="submit"
        value="create account"
      />
    </form>
  );
}
