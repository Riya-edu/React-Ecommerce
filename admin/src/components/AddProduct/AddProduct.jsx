import './AddProduct.css'
import upload_area from '../../assets/upload_area.jpg'
import { useState } from 'react'

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const[productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
    size:"Small",
  })

  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }
  const changeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async() =>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
          product.image = responseData.image_url;
          console.log(product);
          await fetch('http://localhost:4000/addproduct',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify(product),
          }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("Failed")
          })
        }
  }



  return (
    <div className='addproduct'>
      <div className='addproduct_item'>
      <p>Product Name</p>
      <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'/>
      </div>
      <div className='addproductprice'>
      <div className='addproduct_item'>
      <p>Price</p>
      <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here'/>
      </div>
      <div className='addproduct_item'>
      <p>Offer Price</p>
      <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here'/>
      </div>
      </div>

      
      <div className='selector'>
    <div className='addproduct_item'>
    <p>Product Category</p>
    <select value={productDetails.category} onChange={changeHandler} name="category" className='addproductselector'>
      <option value={'women'}>Women</option>
      <option value={'men'}>Men</option>
      <option value={'kids'}>Kids</option>
    </select>
    
    <p>Select size:</p>
  <select value={productDetails.size} onChange={changeHandler} name="size" className='addproductselector'>
    <option value={'small'}>Small</option>
    <option value={'medium'}>Medium</option>
    <option value={'large'}>Large</option>
    <option value={'extra-large'}>Extra Large</option>
  </select>
 </div>
    </div>
    <div className='addproduct_item'>
    <label htmlFor='file_input'>
    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct_img_thumbnail'/>
    </label>
    <input onChange={imageHandler} type='file' name='image' id='file_input' hidden/>
    </div>
    <button onClick={()=>{Add_Product()}} className='addproduct_button'>ADD</button>
    </div>
  )
}

export default AddProduct