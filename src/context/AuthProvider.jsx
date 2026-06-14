import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({});
    return (
        <AuthContext.Provider value={{cartItems, setCartItems, products, setProducts, product, setProduct}}>
            {children}
        </AuthContext.Provider>
    )
}