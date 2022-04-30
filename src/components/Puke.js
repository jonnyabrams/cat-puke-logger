import { FaTimes } from 'react-icons/fa'

const Puke = ({ puke, onDelete }) => {
  return (
    <div className='puke'>
      <h3>{puke.type} <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
      onClick={() => onDelete(puke.id)} /></h3>
      <p>{puke.details}</p>
      <p>{puke.day}</p>
    </div>
  )
}

export default Puke