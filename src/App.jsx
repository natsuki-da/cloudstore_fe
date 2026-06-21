import { Routes, Route } from "react-router-dom"
import Signup from "./pages/LoginSignin/Signup"
import Login from "./pages/LoginSignin/Login"
import Products from "./pages/Product/Products"
import { AuthProvider } from "./context/AuthProvider"
import ProductDetail from "./pages/Product/ProductDetail"
import ShoppingCart from "./pages/ShoppingCart"
import OrderConfirmation from "./pages/OrderConfirmation"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductDetail />}/>
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/order_confirmation" element={<OrderConfirmation />}/>
      </Routes>
    </AuthProvider>

  )
}

export default App
