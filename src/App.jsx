import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const base_url = "https://reqres.in/api/";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(base_url + "users?page=2")
    .then(response => response.json())

    .then(json => setUsers(json.data))

    .catch(error => console.log(error))
  }, []);
  return (
    <>
      {users.map(user =>{
        <div key={user.id}>

          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>
          <img src={user.avatar} alt={user.first_name} />
        </div>
      })}
    </>
  );
}

export default App
