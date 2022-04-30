import { useState } from 'react'

const AddPuke = ({ onAdd }) => {
  const [type, setType] = useState('')
  const [details, setDetails] = useState('')
  const [day, setDay] = useState('')
  const [urgent, setUrgent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!type) {
      alert('You must log a puke')
      return
    }

    onAdd({ type, details, day, urgent })

    setType('')
    setDetails('')
    setDay('')
    setUrgent(false)

  }
  
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Type</label>
        <input type='text' placeholder='Add puke' value={type} 
        onChange={(e) => setType(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Details</label>
        <input type='text' placeholder='Describe the puke' value={details} 
        onChange={(e) => setDetails(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add date & time of puke' value={day} 
        onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Mark as urgent?</label> 
        <input type='checkbox' checked={urgent} value={urgent} 
        onChange={(e) => setUrgent(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Save puke' className='btn btn-block' />
    </form>
  )
}

export default AddPuke