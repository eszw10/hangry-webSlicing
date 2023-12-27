import Nav from "./components/Nav"
import { Button } from 'flowbite-react';


function App() {
  return (
    <div className="text-dark">
      <Nav/>
      <h1 className='text-red-500 text-lg font-bold'>This is Hangry web-slicing</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
