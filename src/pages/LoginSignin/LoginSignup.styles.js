import styled from "styled-components";

export const LoginSignupContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  h1 {
    font-weight: 200;
    font-size: 3rem;
  }
`;

export const LoginSignupForm = styled.form`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldGroup = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  margin: 1rem 0 ;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 200;
  margin-right: 1rem;
  white-space: nowrap;
`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1rem;
  flex: 1;
  background-color: #f8f9fa;
  border: none;
  border-bottom: 1px solid;
  transition: 0.3s;
  &:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 4rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 200;
`;