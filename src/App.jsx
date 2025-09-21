
import './App.css'
import Counter from './Counter'
import Batsman from './BatsMan'

function App() {

  function handleClick(){
    alert("I am click")
  }

  const handleClick3 = ()=>{
    alert('click 3')
  }


  return (
    <>
      <h2>Vite + React</h2>

      <Batsman></Batsman>


      <Counter></Counter>

      
      {/* <button onclick="handleClick()"> click me</button> */}
      <button onClick={handleClick}> Click Me</button>

      <button onClick={function handleClick(){
        alert('click me 2')
      }}> Click Me 02</button>

      <button onClick={handleClick3}> Click Me 02</button>

      <button onClick={() => alert('click 4')}> Click Me 04</button>
    </>
  )
}

export default App
