import styled from "styled-components"
import { InfoContext } from "./InfoContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function PageLogin() {
    const { email, setEmail, password, setPassword, setUserName } = useContext(InfoContext)
    const navigate = useNavigate();

    function checkInfo(e) {
        
        if (email && password) {
            const requisicao = axios.post("http://localhost:5000/sign-in",
                {
                    email,
                    password
                });

            requisicao.then((item) => {
                localStorage.setItem('token', item.data.token);
                setUserName(item.data.name)
                navigate('/registros')
            });
            requisicao.catch(() => alert('informação incorreta ou cadastro inexistente'));
        } else {
            alert('favor preencher todas as informações')
        }
    }

    return (
        <>
            <Container>
                <h1>My Wallet</h1>
                <CadaInput type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></CadaInput>
                <CadaInput type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></CadaInput>
                <BotaoEntrar onClick={checkInfo}> Entrar </BotaoEntrar>
                <Link to={'/cadastro'}>
                    <h2> Primeira vez? Cadastre-se! </h2>
                </Link>
            </Container>
        </>
    )
};

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #8C11BE;
width: 375px;
height: 667px;
    h1{
        font-family: 'Saira Stencil One';
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }
    h2 {
        width: 191px;
        height: 18px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`

const CadaInput = styled.input`
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 13px;
padding-left: 15px;
font-family: 'Raleway';
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
`

const BotaoEntrar = styled.button`
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
margin-bottom: 36px;
font-family: 'Raleway';
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`