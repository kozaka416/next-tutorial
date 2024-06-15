import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // IDを使ってデータを取得し表示する
  return (
    <div>
      <h1>Detail Page for ID: {id}</h1>
      {/* データの表示 */}
    </div>
  );
};

export default DetailPage;
