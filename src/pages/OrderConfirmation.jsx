import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import * as GS from "../styles/GlobalStyle.styles";
import * as S from "./ShoppingCart.styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OrderConfirmation = () => {
    const { cartItems, setCartItems } = useAuth();
    const navigate = useNavigate();

    function handleGoBack() {
        setCartItems([]);
        navigate("/products")
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        localStorage.removeItem("token");
        console.log("token removed");
    }, []);


    return (
        <GS.Container>
            <Container>
                <S.Header>
                    <S.PageTitle style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>Order Successful!</S.PageTitle>
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
                </S.Body>
                <S.Footer style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <S.GoBackButton onClick={handleGoBack}>Home</S.GoBackButton>
                </S.Footer>
            </Container>
        </GS.Container >
    );
}

export default OrderConfirmation;