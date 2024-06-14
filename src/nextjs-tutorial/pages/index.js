import '../styles/Home.module.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function MyAPP() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          height: user.imageSize,
          width: user.imageSize,
        }}
      />
    </>
  );
}