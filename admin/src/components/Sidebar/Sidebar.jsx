import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/add_product_icon.png'
import list_product_icon from '../../assets/list_product_icon.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar_list'>
        <img src={add_product_icon} height={50} width={50}></img>
        <p>Add Product</p>
        <br />
        <br />
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar_list'>
        <img src={list_product_icon} height={50} width={50}></img>
        <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar