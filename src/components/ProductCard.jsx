import { useEffect } from "react"
import { useAuth } from "../context/useAuth"
import * as GS from "../styles/GlobalStyle.styles"
import * as S from "./ProductCard.styles"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { products, setProduct } = useAuth();

    const handleClick = () => {
        setProduct(product)
        navigate(`/products/${product.id}`)
    }
    return (
        <GS.Container>
            <S.CardContainer>
                <S.CardHeader>
                    <S.Image src={product.image} alt={product.title} />
                </S.CardHeader>
                <S.CardBody>
                    <S.Title>{product.title}</S.Title>
                    <S.Price>$ {product.price}</S.Price>
                </S.CardBody>
                <S.CardFooter>
                    <S.ViewButton onClick={handleClick}>View</S.ViewButton>
                </S.CardFooter>

            </S.CardContainer>
        </GS.Container>
    )
}

export default ProductCard;