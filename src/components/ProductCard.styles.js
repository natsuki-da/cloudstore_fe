import styled from "styled-components";

export const CardContainer = styled.div`
width: 28rem;
height: 35rem;
padding: 3rem 1rem 0 1rem;
margin-bottom: 5rem;
border:  1px solid #333333;
display: flex;
flex-direction: column;
align-items: center;
`;

export const CardHeader = styled.div`
  width: 70%;
  height: 18rem;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardBody = styled.div`
  width: 100%;
  margin: 2rem 0;
  height: 8rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Price = styled.h2`
  font-size: 1.25rem;
  font-weight: 200;
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
`;

export const ViewButton = styled.button`
  width: 12rem;
  heiht: 2rem;
  font-size: 1rem;
  color: #f8f9fa;
  background-color: #333333;
  transition: all 0.1s ease;
  &:active {
    background-color:  #f8f9fa;
    color: #333333;
  }
`;