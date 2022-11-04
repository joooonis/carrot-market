import { NextPage } from 'next';
import Button from '@components/button';
import Layout from '@components/layout';
import TextArea from '@components/textarea';
import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Post } from '@prisma/client';
import useCoords from '@libs/client/useCoords';

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation('/api/posts');
  const { latitude, longitude } = useCoords();
  const onValid = (data: WriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };

  const router = useRouter();

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Write Post">
      <form onSubmit={handleSubmit(onValid)} className="space-y-4 p-4">
        <TextArea
          register={register('question', { required: true, minLength: 5 })}
          required
          placeholder="Ask a question!"
        />
        <Button text={loading ? 'Loading...' : 'Submit'} />
      </form>
    </Layout>
  );
};

export default Write;
