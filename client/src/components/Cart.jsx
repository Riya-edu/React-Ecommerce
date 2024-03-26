
import BasicButtons from "./ButtonCart"
import emptycart from "../assets/emptycart.jpg"
import CartStepper from "./CartStepper"

function Cart() {
  return (
    <>
    <div>
    <CartStepper />
    <div className="grid justify-items-center">  
    <img src={emptycart}/>
    
    <BasicButtons />
    </div>
    </div>
   
  </>
    )
}

export default Cart
