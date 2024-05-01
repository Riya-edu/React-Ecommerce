
import Home from'./components/Home';
//import ComponentNavbar from './components/Navbar';
{/*import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';*/}
const App = () => {
  return (
    <>
    <Home />
    {/*
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/men' element={<ShopCategory category='men' />}/>
      <Route path='/women' element={<ShopCategory category='women' />}/>
      <Route path='/kids' element={<ShopCategory category='kids' />}/>
      <Route path='/product' element={<Product />}>
        <Route path=':productId' element={<Product />} />
      </Route>
    
    </Routes>
    
  </BrowserRouter>
  */}
    
    </>
    
  )
}

export default App