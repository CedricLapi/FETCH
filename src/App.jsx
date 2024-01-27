import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const base_url = "https://reqres.in/api/";

  const [users, setUsers] = useState([]);

  //Run side-effects when a component is mounted.
  //useEffect(() => {}, []), a higher order function encapsulating a callback function.
  useEffect(() => {

    //Fetch is basically a promise, allowing us to run stuff asynchronously, that is simultaneously.
    fetch(base_url + "users?page=2")
    .then(response => response.json()) //What to do when things go well.

    .then(json => setUsers(json.data))

    .catch(error => console.log(error)) //What to do when it goes sideways.

     //Dependency array: You'll never want to use your setter on the same useEffect that is depended on your getter.
     //otherwise, you'll get into some sort of infinite loop where the depedency is updated continuously.
     //Having it empty, means the side-effect would be run only once.

  }, [users]);
  return (
    <>
      {users.map(user =>{
        <div key={user.id}>

          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>
          <img src={user.avatar} alt="user avatar" />
        </div>
      })}
    </>
  );
}

export default App
