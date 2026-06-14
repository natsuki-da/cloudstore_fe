import { Link, useNavigate } from "react-router-dom";
import * as GS from "../../styles/GlobalStyle.styles"
import * as S from "./LoginSignup.styles"
import { useState } from "react";
import { login } from "../../api/userAPI";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await login({email, password});
            localStorage.setItem(
                "token",
                response.data.token
            );
            navigate("/products");
        } catch(error){
            alert("Login failed!");
        }
    }

    return (
        <GS.Container>
            <S.LoginSignupContainer>
                <h1>User Login</h1>

                <S.LoginSignupForm onSubmit={handleLogin}>
                    <S.FieldGroup>
                        <S.Label>Email</S.Label>
                        <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label>Password</S.Label>
                        <S.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </S.FieldGroup>

                    <S.Button type="submit">Login</S.Button>
                </S.LoginSignupForm>
                <S.Footer>
                    Don't have an account?<br />
                    <Link to="/register">Create account</Link>
                </S.Footer>
            </S.LoginSignupContainer>
        </GS.Container>
    )
}

export default Login;