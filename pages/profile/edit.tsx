import type { NextPage } from 'next';
import Button from '@components/button';
import Input from '@components/input';
import Layout from '@components/layout';
import useUser from '@libs/client/useUser';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useMutation from '@libs/client/useMutation';

interface EditForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formErrors: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<EditForm>();

  const [avatarPreview, setAvatarPreview] = useState('');
  const avartar = watch('avatar');

  useEffect(() => {
    if (avartar && avartar.length > 0) {
      const file = avartar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avartar]);

  useEffect(() => {
    if (user?.email) setValue('email', user?.email);
    if (user?.phone) setValue('phone', user?.phone);
    if (user?.name) setValue('name', user?.name);
    if (user?.avatar)
      setAvatarPreview(
        `https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${user?.avatar}/public`,
      );
  }, [user, setValue]);

  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>('/api/users/me');

  const onValid = async ({ email, phone, name, avatar }: EditForm) => {
    if (loading) return;
    if (email === '' && phone === '' && name === '')
      return setError('formErrors', {
        message: 'Email OR Phone number are required. You need to choose one.',
      });

    if (avatar && avatar.length > 0 && user) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append('file', avatar[0], user.id + '');
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: 'POST',
          body: form,
        })
      ).json();
      editProfile({
        email,
        phone,
        name,
        avatarId: id,
      });
    } else {
      editProfile({
        email,
        phone,
        name,
      });
    }

    editProfile({ email, phone, name });
  };

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError('formErrors', { message: data.error });
    }
  }, [data, setError]);

  return (
    <Layout canGoBack title="Edit Profile">
      <form onSubmit={handleSubmit(onValid)} className="space-y-4 py-10 px-4">
        <div className="flex items-center space-x-3">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              className="h-14 w-14 rounded-full bg-slate-500"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-slate-500" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-gray-50"
          >
            Change
            <input
              {...register('avatar')}
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register('name')}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register('email')}
          label="Email address"
          name="email"
          type="email"
        />
        <Input
          register={register('phone')}
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        {errors.formErrors ? (
          <span className="my-2 block text-red-500">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button
          onClick={() => clearErrors()}
          text={loading ? 'loading...' : 'Update profile'}
        />
      </form>
    </Layout>
  );
};

export default EditProfile;
