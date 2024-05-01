import './Item.css';

const Item = (props) => {
  return (
    <div className='Item'>
    <img src={props.image} alt="error 404"/>
    <p className='font-medium text-lg' >{props.name}</p>
    <div className="item-prices">
        <div className="item-price-new">
        ₹{props.new_price}
        </div>
        <div className="item-price-old">
        ₹{props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item