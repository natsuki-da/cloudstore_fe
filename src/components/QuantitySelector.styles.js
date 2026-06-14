import styled from "styled-components";


export const Container = styled.div`
  width: 12rem;
  height: 5rem;
  //background-color: #6366f1;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid  #333333;
  border-radius: 50%;
  background: #f8f9fa;
  color:  #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.1s ease;
  &:active {
    background-color: #333333;
  }
`;

export const Quantity = styled.div`
  height: 5rem;
  width: 6rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center; 
`;