import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  //const base_url = "https://reqres.in/api/";

  const [users, setUsers] = useState({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skincolor: '',
  });

  const [movies, setMovies] = useState([]);

  //const [accountTotal, setAccountTotal] = useState(0);

  //function handleAdd() {
  //  setAccountTotal(accountTotal + 1)
  //}

 // useEffect(() => {
   // console.log(`Account total is ${accountTotal}`)
  //}, [accountTotal])






                                  /* Using Fetch Api */


 {/* //Run side-effects when a component is mounted.
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

  }, [users]);*/}


                                    /*UseEffect using Axios dependency */ 
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/4')
                                            //The firt data is automatically embeded into axios, while the second one is for a specific api
    .then(response => {console.log(response.data)
      setUsers(response.data)
    })
    .catch(err => {console.log(err)})
  }, [])


  return (
    <>

    {/*<button onClick={handleAdd}> Click Here</button>*/}

      {/*{users.map(user =>{
        <div key={user.id}>

          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>
          <img src={user.avatar} alt="user avatar" />
      </div>
      })}
    */}

    <h1> {users.name} </h1>
    <h3>Height:{users.height}</h3>
    <h3>Eye Color:{users.eye_color}</h3>
    <h3>Height:{users.height}</h3>

    <button>See movies associated</button>
    

    </>
  );
}

export default App;
