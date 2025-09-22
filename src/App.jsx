
import './App.css'
import Counter from './Counter'
import Batsman from './BatsMan'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'


const fetchPosts = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())


// const fetchFriends = async () =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();

// }

function App() {

  const fetchPromise = fetchPosts()
  // const friendsPromise = fetchFriends();

  function handleClick() {
    alert("I am click")
  }

  const handleClick3 = () => {
    alert('click 3')
  }


  return (
    <>
      <h2>Vite + React</h2>

      <Suspense fallback={<h3> all post are coming...</h3>}>
        <Posts fetchPromise={fetchPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback= {<h3> Loading... </h3>}> 
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

     {/* <Suspense fallback={<h3> friends are coming for treat.......</h3>}>
        <Friends friendsPromise ={friendsPromise}></Friends>
     </Suspense> */}

      
      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button onclick="handleClick()"> click me</button> */}
      <button onClick={handleClick}> Click Me</button>

      <button onClick={function handleClick() {
        alert('click me 2')
      }}> Click Me 02</button>

      <button onClick={handleClick3}> Click Me 02</button>

      <button onClick={() => alert('click 4')}> Click Me 04</button>
    </>
  )
}

export default App
