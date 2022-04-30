import { useState } from 'react'
import Header from './components/Header'
import Pukes from './components/Pukes'
import AddPuke from './components/AddPuke'

const App = () => {
  const [showAddButton, setShowAddButton] = useState(false)
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

  // Add puke
  const addPuke = (puke) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newPuke = { id, ...puke }
    setPukes([...pukes, newPuke])
  }

  // Delete puke
  const deletePuke = (id) => {
    setPukes(pukes.filter((puke) => puke.id !== id))
  }

  // Toggle urgency setting
  const toggleUrgency = (id) => {
    setPukes(pukes.map((puke) => puke.id === id ? { ...puke, urgent: !puke.urgent } : puke))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddButton(!showAddButton)} 
      showAdd={showAddButton} />
     {showAddButton && <AddPuke onAdd={addPuke} />}
      {pukes.length > 0 ? <Pukes pukes={pukes} onDelete={deletePuke} 
      onToggle={toggleUrgency} /> 
      : 'No pukes logged'}
    </div>
  );
}

export default App;
