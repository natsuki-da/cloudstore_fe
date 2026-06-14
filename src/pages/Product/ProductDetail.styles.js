import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftContainer = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const Image = styled.img`
   width: 30rem;
   height: auto;
`;

export const RightContainer = styled.div`
 flex: 1;
 margin: 2rem;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Title = styled.h1`
 font-size: 2.75rem;
 font-weight: 400;
 margin-right: auto;
`;

export const Price = styled.h3`
  font-size: 1.75rem;
  font-weight: 300;
  margin-right: auto;
`;

export const DetailSection = styled.div`
  height: 18rem;
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
`;


export const Description = styled.div`
 font-size: 1.5rem;  
 line-height: 3rem;
 font-weight: 200;
 height: 13rem;
 overflow-y: auto;
`;

export const Category = styled.div`
  width: 12rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  background-color:  #333333;
  font-size: 1rem;
  font-weight: 400;
  color:  #f8f9fa;
`;

export const CartSection = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  width: 12rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 200rem;
  border: 1px solid  #333333;
  background:  #333333;
  color:  #f8f9fa;
  cursor: pointer;
  margin-right: auto;
  transition: all 0.1s ease;
  &:active {
    background-color:  #f8f9fa;
    color: #333333;
  }
`;

