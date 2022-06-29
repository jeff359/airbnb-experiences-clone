
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import tileData from './data'

function App() {
  const tileDataMap = tileData.map(tile=>(
    <Card 
    key={tile.id}
    item={tile}
   />
  )
  )
  return (
    <div className="App">
     <Navbar/>
     <Hero />
     <section className="cards-list">
    {tileDataMap}
    </section>
    </div>
  );
}

export default App;
