 import PropTypes from 'prop-types'
 import Button from './Button'
 
 const Header = ({ title, onAdd, showAdd }) => {
   return (
     <header className='header'>
       <h1 style={{ color: 'yellow', backgroundColor: 'green' }}>{title}</h1>
       <Button color={showAdd ? 'red' : 'green' } text={showAdd ? 'Close' : 'Add Puke'} onClick={onAdd} /> 
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