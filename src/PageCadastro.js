import styled from "styled-components"
import { InfoContext } from "./InfoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function PageCadastro(){
    const { setEmail, setPassword, setName } = useContext(InfoContext)

    return (
        <>
            <Container>
                <h1>My Wallet</h1>
                <CadaInput type="text" placeholder="Nome" onChange={e => setName(e.target.value)}></CadaInput>
                <CadaInput type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></CadaInput>
                <CadaInput type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></CadaInput>
                <CadaInput type="password" placeholder="Confirmar a senha" onChange={e => setPassword(e.target.value)}></CadaInput>
                <BotaoEntrar> Cadastrar </BotaoEntrar>
                <Link to={'/PageCadastro'}>
                    <h2> Já tem uma conta? Entre agora! </h2>
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