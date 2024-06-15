import { useState } from 'react';

export default function MyAPP() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Home</h1>
      <MyButton />
      <MyButton />
    </>
  );
}

function MyButton() {
  
}