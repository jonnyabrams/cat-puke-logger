import { FaTimes } from 'react-icons/fa'

const Puke = ({ puke, onDelete, onToggle }) => {
  return (
    <div className={`puke ${puke.urgent ? 'urgent' : '' }`} onDoubleClick={() => onToggle(puke.id)}>
      <h3>{puke.type} <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
      onClick={() => onDelete(puke.id)} /></h3>
      <p>{puke.details}</p>
      <p>{puke.day}</p>
    </div>
  )
}

export default Puke