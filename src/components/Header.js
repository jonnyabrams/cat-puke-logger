 import PropTypes from 'prop-types'
 import Button from './Button'
 
 const Header = ({ title }) => {
   const onClick = () => {
     console.log('click')
   }
  
   return (
     <header className='header'>
       <h1 style={{ color: 'yellow', backgroundColor: 'green' }}>{title}</h1>
       <Button color='green' text='Add Puke' onClick={onClick} /> 
     </header>
   )
 }

 Header.defaultProps = {
   title: 'Cat Puke Logger'
 }

 Header.propTypes = {
   title: PropTypes.string,
 }
 
 export default Header