import * as GS from "../styles/GlobalStyle.styles"
import * as S from "./QuantitySelector.styles"

const QuantitySelector = ({quantity, setQuantity}) => {

    return (
        <GS.Container>
            <S.Container>
                <S.Button onClick={() => setQuantity((prev) => Math.max(1, prev-1))}> - </S.Button>
                <S.Quantity>{quantity}</S.Quantity>
                <S.Button onClick={() => setQuantity((prev) => prev + 1)}> + </S.Button>
            </S.Container>
        </GS.Container>
    )
}

export default QuantitySelector;