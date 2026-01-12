import React from 'react'
import { useSelector } from 'react-redux'
import Cstyle from '../Components/Cart.module.css'
import { useDispatch } from 'react-redux'
import { increaseItem, reduceItem } from '../Redux/CartSlice'


const Cart = () => {
    const dispatch = useDispatch()

    const cart = useSelector((item) => {
        return item.cart
    })
    const handledecrease = (prod) => {
        dispatch(reduceItem(prod))
    }
    const handleincrease = (prod) => {
        dispatch(increaseItem(prod))
    }
    return (
        <>
            <div className={Cstyle.cartMain}>
                <div>
                    {
                        cart ? (
                            cart.map((item) => (
                                <div className={Cstyle.cartCard}>
                                    <div className={Cstyle.imgCart}>
                                        <img src={item.images[0]} />
                                    </div>
                                    <div className={Cstyle.infocart}>
                                        <h1>{item.title}</h1>
                                        <div>
                                            <h3>{item.finalPrice * item.quantity}</h3>
                                            <h4>{item.originalPrice * item.quantity}</h4>
                                        </div>
                                        <div className={Cstyle.cartbtns}>
                                            <button onClick={() => handledecrease(item)}>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => handleincrease(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (<>No cart items</>)
                    }
                </div>
                <div>
                    <h1>Order Summary</h1>
                    <div>

                        <p>original price : {cart.reduce((total, item) => {
                            return total = total + (item.quantity * item.originalPrice)
                        }, 0)}</p>
                        <p>Discount : {cart.reduce((total, item) => {
                            return total = total + ((item.originalPrice - item.finalPrice) * item.quantity);
                        }, 0)}</p>
                        <hr />
                        <h2>Total : {cart.reduce((total, item) => {
                            return total = total + (item.quantity * item.finalPrice)
                        }, 0)}</h2>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
