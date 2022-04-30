import Puke from './Puke'

const Pukes = ({ pukes, onDelete, onToggle }) => { 
  return (
    <>
      {pukes.map((puke) => (<Puke key={puke.id} puke={puke} 
      onDelete={onDelete} onToggle={onToggle} />))}
    </>
  )
}

export default Pukes