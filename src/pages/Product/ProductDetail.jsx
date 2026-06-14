import { useNavigate } from "react-router-dom";
import QuantitySelector from "../../components/QuantitySelector";
import { useAuth } from "../../context/useAuth"
import * as GS from "../../styles/GlobalStyle.styles"
import * as S from "../Product/ProductDetail.styles"
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const { product, cartItems, setCartItems } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    function handleClick(){
        setCartItems((prev) => [...prev, {...product, quantity},]);
        navigate("/shoppingcart")
    }

    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

    if (!product) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <GS.Container>
            <S.ProductDetailContainer>
                <S.LeftContainer>
                    <S.Image src={product.image} alt={product.title} />
                </S.LeftContainer>

                <S.RightContainer>
                    <S.Title>{product.title}</S.Title>
                    <S.Price>$ {product.price}</S.Price>
                    <S.DetailSection>
                        <S.Description>{product.description}</S.Description>
                        <S.Category>{product.category}</S.Category>
                    </S.DetailSection>
                    <S.CartSection>
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    </S.CartSection>
                    <S.AddToCartButton onClick={handleClick}>Add to cart</S.AddToCartButton>
                </S.RightContainer>
            </S.ProductDetailContainer>
        </GS.Container>
    )
}

export default ProductDetail;