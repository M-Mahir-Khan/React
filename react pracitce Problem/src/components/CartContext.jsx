import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ childeren }) {

    const initialState = {
        cartItems:[],
    }

    function cartReducer(state, action) {
        switch (action.type) {

        }
    }

    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)
    return <CartContext.Provider value={cartState,cartDispatch}>{childeren}</CartContext.Provider>
}

export function useCart(){
    return useContext(CartContext)
}