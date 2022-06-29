
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import tileData from './data'

function App() {
  const tileDataMap = tileData.map(tile=>(
    <Card 
    img={tile.coverImg}
    rating={tile.stats.rating}
    reviewCount={tile. stats.reviewCount}
    country={tile.location}
    title={tile.title}
    price={tile.price}
   />
  )
  )
  return (
    <div className="App">
     <Navbar/>
     <Hero />
    {tileDataMap}
    </div>
  );
}

export default App;
