'use client';
import { useState } from 'react';

const firstList = [
  'Potatoes',
  'Bananas',
  'Carrots',
  'Oranges',
  'Kale',
  'Pineapple',
];
const secondList = [
  'Apples',
  'Beans',
  'Grapes',
  'Spinnach',
  'Pears',
  'Broccoli',
];

export default function Home() {
  const [cart1, setCart1] = useState(firstList);
  const [cart2, setCart2] = useState(secondList);

  const handleOnClick = () => {
    let temp1: any = [...cart1];
    let temp2: any = [...cart2];
    cart1.forEach((item, index) => {
      if (index % 2 !== 1) {
        const temp: any = temp2[index];
        temp2[index] = temp1[index];
        temp1[index] = temp;
      }
    });
    setCart1(temp1);
    setCart2(temp2);
  };
  return (
    <div>
      <div>
        {cart1.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <button onClick={handleOnClick}>
        <h1>Swap</h1>
      </button>
      <div>
        {cart2.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
