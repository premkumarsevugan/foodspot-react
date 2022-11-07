import { useState } from "react";

const AvailableItems = (props) => {
    const [items, setItems] = useState(props.items);
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);

    const addCart = (item) =>{
        const name = item.name;
        const price =item.price;
        
        const newlyAdded= {name,price}
        const cartItems = [...cart, newlyAdded];
        setCart(cartItems);
        setTotal(total+price);
    }
    return (
        <div className="AvailableItems-big">
            <h1 className="Head">Available Items</h1>
            <div className="AvailableItems">
            {items.map((item) => (
                <div className="card-items">
                    <div className="card-img">
                        <img src={item.src} alt="Image Problem Need to Be Rectify" />

                    </div>
                    <div className="card-detail">
                        <h2>{item.name}<span className="price">&#x20B9; {item.price} &nbsp;&nbsp;</span></h2>
                        {/* <h3> &#x20B9; {item.price}</h3> */}
                        <button
                         onClick={()=>addCart(item)}
                         >Add To Cart</button>
                    </div>
                    
                </div>
            ))}
            </div>
        <div className="total-cart">
            Your Cart Total is : {total} 
            <button>okay</button>
        </div>

        </div>
    );
}
export default AvailableItems;