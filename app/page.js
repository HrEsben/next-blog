'use client';
import { useState } from 'react';
import Card from '@/components/Card';

export default function Home(searchParams) {
  const [isVisible, setIsVisible] = useState(true)
const [names, setNames] = useState(["Esben", "Mikkel", "Nikolaj"])
  const handleClick = (e) => {
    console.log(e)
  setIsVisible(!isVisible)
  }
  const handleAdd = () => {
    setNames([...names, "New Name"])
  }
  const name = "Esben";
  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>)

console.log(searchParams)
if (searchParams.error) throw new Error("Error from searchParams")

  return (
    <>
    <div className="space-y-4"><div>Hello, {name}</div>
    {cards}

<div className='flex space-x-4'>
  <button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</button>
<button onClick={handleAdd}>Add</button>
</div>
</div>
    </>
  );
}
