import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
`

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  padding: 5rem 3rem 5rem 3rem;
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CartItemsTable = styled.table`
  width: 90%;
  table-layout: fixed;
   border-bottom: 1px solid  #333333; 
`
export const TableHeader = styled.thead`
  width: 100%;
  height: 5rem;
  text-align: left;
`
export const Label = styled.th`
  border-bottom: 1px solid  #333333; 
  font-size: 1.5rem;
  font-weight: 400;
`;

export const TableBody = styled.tbody`
  td {
    font-size: 1.25rem;
    font-weight: 200;
    height: 10rem;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

export const CartSummarySection = styled.div`
  width: 90%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  font-size: 1.75rem;
  font-weight: 400;
  //background-color:  #1683ef;
`;

export const Footer = styled.div`
  width: 90%;
  height: 10rem;
  display: flex;
  justify-content: flex-end;  
`;

export const GoBackButton = styled.button`
  width: 12rem;
  height: 5rem;
  font-size: 1rem;
  color:  #333333;
  background-color:  #f8f9fa;
  transition: all 0.1s ease;
  &:active {
    background-color: #333333;
    color: #f8f9fa;
  }
`;

export const CheckoutButton = styled.button`
  width: 12rem;
  height: 5rem;
  font-size: 1rem;
  color: #f8f9fa;
  background-color: #333333;
  transition: all 0.1s ease;
  &:active {
    background-color:  #f8f9fa;
    color: #333333;
  }
`;
