import React, { createContext, useReducer } from 'react';

// Initial State
const initialState = {
    cartItems: [],
    totalQuantity: 0,
};

// Reducer Function
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { product } = action.payload;
            const existingProduct = state.cartItems.find((item) => item.title === product.title);

            if (existingProduct) {
                // Increase quantity if product exists
                const updatedCartItems = state.cartItems.map((item) =>
                    item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
                );
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity + 1,
                };
            } else {
                // Add new product
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...product, quantity: 1 }],
                    totalQuantity: state.totalQuantity + 1,
                };
            }
        }
        default:
            return state;
    }
};

// Create Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
