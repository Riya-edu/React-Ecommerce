import { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const ShopContextProvider = () => {

    const [setAll_product] = useState([]);

    useEffect (()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_product(data))
    },[])

}

export default ShopContextProvider;