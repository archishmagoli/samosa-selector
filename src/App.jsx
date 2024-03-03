import { useState } from 'react'
import samosa from './assets/samosa.png';
import './index.css';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10 && multiplier == 1) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100 && multiplier == 2) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000 && multiplier == 10) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  const upgrades = [
    {
      "id": 1,
      "name" : "Double Stuffed 👯‍♀️",
      "description": "2× per click",
      "cost" : 10,
      "action" : buyDoubleStuffed
    }, 
    
    {
      "id": 2,
      "name" : "Party Pack 🎉",
      "description": "5× per click",
      "cost" : 100,
      "action" : buyPartyPack
    }, 
    
    {
      "id": 3,
      "name" : "Full Feast 👩🏽‍🍳",
      "description": "10× per click",
      "cost" : 1000,
      "action" : buyFullFeast
    }
  ]

  

  return (
    <div className="App">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosa} onClick={updateCount} />

        <div className='container'>
          {upgrades.map(upgrade => (
            <div className="upgrade" key={upgrade.id}>
              <h3>{upgrade.name}</h3>
              <p>{upgrade.description}</p>
              <button onClick={upgrade.action}>{upgrade.cost} Samosas</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App;
