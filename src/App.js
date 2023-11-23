
import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/Card";
import data from "./data/data.json";

function App() {
  const [id, postedAt, contract, position, company, location] = data


  return (
    <div className="App">
      <Navbar/>
      
      <Card 
          id ={id}
          postdate={postedAt}
          contract={contract}
          position={position}
          company={company}
          location={location}
      />
       

      
    </div>
  );
}

export default App;
