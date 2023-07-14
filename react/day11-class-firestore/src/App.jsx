
import { useEffect } from 'react'

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

function App() {
  const readDatabase = async() => {
    const querySnapshot = await getDocs(collection(db, "test"))
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => console.log(doc));
  };

  useEffect(() => {
    readDatabase()
  });
  return (
    <>
      <h1>Firestore</h1>
    </>
  )
}

export default App
