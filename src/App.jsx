import BulkOrder from "./components/BulkOrder";
import CardContainer from "./components/CardContainer";
import FindUs from "./components/FindUs";
import Hero from "./components/Hero";
import Nav from "./components/Nav"
import data from "./data";


function App() {
  return (
    <div className="text-dark w-full">
      <Nav/>
      <Hero/>
      <CardContainer data={data}/>
      <FindUs/>
      <BulkOrder/>
    </div>
  )
}

export default App
