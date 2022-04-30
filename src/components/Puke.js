const Puke = ({ puke }) => {
  return (
    <div className='puke'>
      <h3>{puke.type}</h3>
      <p>{puke.details}</p>
      <p>{puke.day}</p>
    </div>
  )
}

export default Puke