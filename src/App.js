import { useState } from 'react'
import Header from './components/Header'
import Pukes from './components/Pukes'

function App() {
  const [pukes, setPukes] = useState([
    {
      id: 1,
      type: 'Furball',
      details: 'Regular furball',
      day: 'Monday 12th Feb, 2.30pm',
      urgent: false
    },
    {
      id: 2,
      type: 'Bile',
      day: 'Thursday 15th Feb, 4.15pm',
      details: 'Had been licking stove',
      urgent: false
    },
    {
      id: 3,
      type: 'Regurgitated food',
      details: 'Ate too quickly',
      day: 'Monday 19th Feb, 7.30am',
      urgent: false
    }
  ])

  // Delete puke
  const deletePuke = (id) => {
    setPukes(pukes.filter((puke) => puke.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {pukes.length > 0 ? <Pukes pukes={pukes} onDelete={deletePuke} /> 
      : 'No pukes logged'}
    </div>
  );
}

export default App;
