import './App.css';
import Navbar from './components/navbar';
import Image from './components/image';
import Card from './components/card';
import data from './components/data';

function App() {
  const cards = data.map(item=>{
    return(
      <Card
    key={item.id}
    item={item}/>
    )
  })
 
  return (
    <>
    <Navbar/>
    <Image/>
    <section className="cards">
      {cards}
    </section>
    </>
  );
}

export default App;
