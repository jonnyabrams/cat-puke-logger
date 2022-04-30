const pukes = [
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
]

const Pukes = () => {
  return (
    <>
      {pukes.map((puke) => (<h3>{puke.type}</h3>))}
    </>
  )
}

export default Pukes