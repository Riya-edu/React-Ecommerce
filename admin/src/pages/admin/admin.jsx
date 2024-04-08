
import './admin.css' 
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct.jsx'
import ListProduct from '../../components/ListProduct/ListProduct.jsx'


const admin = () => {
  return (
    <div className='admin'>
    <Sidebar />
    <Routes>
    <Route path='/addproduct' element={<AddProduct />} />
    <Route path='/listproduct' element={<ListProduct />} />
    </Routes>
    </div>
  )
}

export default admin