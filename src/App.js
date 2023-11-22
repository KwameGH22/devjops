
import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/Card";

function App() {
  let  data = require ("./data/data.json");


  return (
    <div className="App">
      <Navbar/>
      {data.map((item) => {return (
       <Card 
          id ={item.id}
          postdate={item.postdate}
          contract={item.contract}
          position={item.position}
          company={item.company}
          location={item.location}

        />
        )}
          )
        }
      

      
    </div>
  );
}

export default App;
