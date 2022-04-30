import Puke from './Puke'

const Pukes = ({ pukes }) => { 
  return (
    <>
      {pukes.map((puke) => (<Puke key={puke.id} puke={puke} />))}
    </>
  )
}

export default Pukes