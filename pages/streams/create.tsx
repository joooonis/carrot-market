import type { NextPage } from 'next';
import Button from '@components/button';
import Input from '@components/input';
import Layout from '@components/layout';
import TextArea from '@components/textarea';
import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import { Stream } from '@prisma/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface CreateFrom {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const { register, handleSubmit } = useForm<CreateFrom>();
  const [createStream, { data, loading }] =
    useMutation<CreateResponse>('/api/streams');

  const onValid = (form: CreateFrom) => {
    if (loading) return;
    console.log(form);
  };

  const router = useRouter();
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Go Stream">
      <form onSubmit={handleSubmit(onValid)} className=" space-y-4 py-10 px-4">
        <Input
          register={register('name')}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register('price')}
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea
          register={register('description')}
          name="description"
          label="Description"
        />
        <Button text="Go stream" />
      </form>
    </Layout>
  );
};

export default Create;
