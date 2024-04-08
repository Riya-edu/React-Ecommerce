
import './listproduct.css'
import { useEffect, useState } from 'react'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const[allproducts, setAllProducts] = useState([]);

  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id)=>{
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
      })
      await fetchInfo();
  }


  return (
    <div className='listproduct'>
    
    <h1>All Products List</h1>
    <div className='listproduct-formatmain'>
    <p>Products</p>
    <p>Name</p>
    <p>Old Price</p>
    <p>New Price</p>
    <p>Category</p>
    <p>Remove</p>
    </div>
    <div className='listproduct-allproducts'>
    <hr />
      {allproducts.map((product,index)=>{
        return <> <div key={index} className='listproduct-formatmain listproduct-format'>
          <img src={product.image} className='listproduct-product-image'/>
          <p>{product.name}</p>
          <p>₹{product.old_price}</p>
          <p>&#8377;{product.new_price}</p>
          <p>{product.category}</p>
          <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon'src={cross_icon} height={30} width={30}/>
        </div>
        <hr />

        </>
      })}
    </div>
    </div>
  )
}

export default ListProduct