import { useRouter } from 'next/router';

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Edit Page for ID: {id}</h1>
      {/* 他の編集用コンポーネントやフォームをここに追加 */}
    </div>
  );
};

export default EditPage;
