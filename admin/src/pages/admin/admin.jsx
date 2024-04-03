import'./admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
{/*import { Routes, Route } from 'react-router-dom'
import { AddProduct } from '../../components/Add Product/addproduct'
import { ListProduct } from '../../components/List Product/listproduct'*/}

const Admin = () => {
  return (
    <div className='admin'>
    <Sidebar />
    {/*<Routes>
      <Route path='/addproduct' element={<AddProduct/>} />
      <Route path='/listproduct' element={<ListProduct/>} />
  </Routes>*/}
    
    </div>
  )
}

export default Admin