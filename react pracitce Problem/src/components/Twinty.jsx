import React from 'react'
import { useCart } from './CartContext'

const Twinty = () => {

    const {cartState,cartDispatch} = useCart()

    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
    ]

    const addToCart = (item) => {
cartDispatch({type:'ADD_TO_CART',pauload:{...item}})
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            <h3>Product List</h3>
            <ul>
                {products.map((products) => {
                    return <li key={products.id}>
                        {products.name} <button onClick={()=> addToCart(product)}>Add to Cart</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Twinty
