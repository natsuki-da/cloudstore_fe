import { Link } from "react-router-dom";
import * as GS from "../styles/GlobalStyle.styles";
import * as S from "./Navigationbar.styles"

const Navigationbar = () => {
    return (
        <GS.Container>
            <S.Container>
                <a href="/">
                    <S.StoreName>Cloud Store</S.StoreName>
                    <S.Icon src="public/icons/cloud.png" alt="cloud store icon" />
                </a>
                <S.CartIcon>
                    <Link to="/login">
                        <img src="public/icons/person.png" alt="login icon" />
                    </Link>
                    <Link to="/shoppingcart">
                        <img src="public/icons/shopping-cart.png" alt="shopping cart icon" />
                    </Link>
                </S.CartIcon>
            </S.Container>
        </GS.Container>
    )
}

export default Navigationbar;