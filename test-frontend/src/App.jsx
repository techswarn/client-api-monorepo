import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [health, setHealth] = useState('')
  console.log(health)
  useEffect( () => {
    axios.get('https://test.techenv.dev/backend/api/v1/health')
      .then(response => {
        setHealth(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <>
    <div className="">
      <h3>{health?.status}</h3>
    </div>
    </>
  )
}

export default App
