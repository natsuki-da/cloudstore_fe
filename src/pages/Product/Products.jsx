import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import * as S from "./Product.styles";
import * as GS from "../../styles/GlobalStyle.styles"
import { useAuth } from "../../context/useAuth";
import { useEffect } from "react";
import { getProducts } from "../../api/productAPI";
import Navigationbar from "../../components/Navigationbar";

const Products = () => {
    const { product, products, setProducts } = useAuth();

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        const response = await getProducts();
        setProducts(response.data)
    }

    return (
        <GS.Container>
            <Navigationbar />
            <S.ProductContainer>
                {products &&
                    products.map((product, id) => (
                        <ProductCard key={id} product={product} />
                    ))
                }
            </S.ProductContainer>
        </GS.Container>
    )
}

export default Products;