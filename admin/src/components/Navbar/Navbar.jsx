import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import navbarprofile from '../../assets/navbarprofile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo1} className='nav-logo' height={80} width={150}/>
        <img src={navbarprofile} className='nav-profile' height={80} width={80}/>
       
    
    </div>
  )
}

export default Navbar