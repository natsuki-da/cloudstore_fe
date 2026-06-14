import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import * as GS from "../styles/GlobalStyle.styles";
import * as S from "./ShoppingCart.styles";
import { createOrder } from "../api/orderAPI";

const ShoppingCart = () => {
    const { cartItems, setCartItem } = useAuth();
    const navigate = useNavigate();

    function handleGoBack() {
        navigate("/products")
    }

    const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

    async function handleCheckout() {
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const orderRequest = {
            totalPrice: grandTotal,
            items: cartItems.map(cartItem => ({
                productId: cartItem.id,
                quantity: cartItem.quantity,
                price: cartItem.price
            }))
        };
        try {
            const response = await createOrder(orderRequest);
            console.log(response.data);
            alert("Order successful!");
            setCartItem([]);
            navigate("/products");
        } catch (error) {
            console.error(error);
            alert("Order unsuccessful");
        }
    }
    return (
        <GS.Container>
            <S.Container>
                <S.Header>
                    <S.PageTitle>Shopping Cart</S.PageTitle>
                </S.Header>
                <S.Body>
                    <S.CartItemsTable>
                        <S.TableHeader>
                            <tr>
                                <S.Label>Product</S.Label>
                                <S.Label></S.Label>
                                <S.Label>Price</S.Label>
                                <S.Label>Quantity</S.Label>
                                <S.Label>Total</S.Label>
                            </tr>
                        </S.TableHeader>
                        <S.TableBody>
                            {cartItems &&
                                cartItems.map((cartItem, id) => (

                                    <tr key={cartItem.id}>
                                        <td>{cartItem.title}</td>
                                        <td>
                                            <S.Image src={cartItem.image} alt={cartItem.title} />
                                        </td>
                                        <td>{cartItem.price}</td>
                                        <td>{cartItem.quantity}</td>
                                        <td>{cartItem.price * cartItem.quantity} </td>
                                    </tr>
                                ))
                            }
                        </S.TableBody>
                    </S.CartItemsTable>
                    <S.CartSummarySection>Total: ${grandTotal.toFixed(2)}</S.CartSummarySection>
                </S.Body>
                <S.Footer>
                    <S.GoBackButton onClick={handleGoBack}>Continue Shopping</S.GoBackButton>
                    <S.CheckoutButton onClick={handleCheckout}>Checkout</S.CheckoutButton>
                </S.Footer>
            </S.Container>
        </GS.Container >
    )

};

export default ShoppingCart;