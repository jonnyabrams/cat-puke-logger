import Puke from './Puke'

const Pukes = ({ pukes, onDelete }) => { 
  return (
    <>
      {pukes.map((puke) => (<Puke key={puke.id} puke={puke} onDelete={onDelete} />))}
    </>
  )
}

export default Pukes