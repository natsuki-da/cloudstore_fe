import { useState } from "react"
import * as GS from "../../styles/GlobalStyle.styles"
import * as S from "./LoginSignup.styles"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/useAuth"
import { register } from "../../api/userAPI"

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUserDetail } = useAuth();
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const response = await register({
                firstName, lastName, email, password
            })
            navigate("/login");
        } catch (error) {
            console.error(error);
            console.error(error.response);
            alert("Register Failed!!");
        }
    }
    return (
        <GS.Container>
            <S.LoginSignupContainer>
                <h1>Welcome</h1>

                <S.LoginSignupForm onSubmit={handleRegister}>
                    <S.FieldGroup>
                        <S.Label>First name:</S.Label>
                        <S.Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <S.Label>Last name:</S.Label>
                        <S.Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </S.FieldGroup>
                    <S.FieldGroup>
                        <S.Label>Email</S.Label>
                        <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label>Password</S.Label>
                        <S.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </S.FieldGroup>

                    <S.Button type="submit">Create account</S.Button>
                </S.LoginSignupForm>
                <S.Footer>
                    Already have an account?<br />
                    <Link to="/login">LOGIN</Link>
                </S.Footer>
            </S.LoginSignupContainer>
        </GS.Container>
    )
}

export default Signup;