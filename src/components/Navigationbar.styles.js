import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color:  #f8f9fa;;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
  }
`;

export const StoreName = styled.h1`
  color:   #333333;
  font-size: 3rem;
  font-weight: 200;
  margin-left: 3rem;
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
`;


export const CartIcon = styled.div`
  margin-left: auto;
  display: flex;
  img{
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    margin-right: 5rem;
  }
`;