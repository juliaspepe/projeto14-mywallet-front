import styled from "styled-components"
import { InfoContext } from "./InfoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function PageNovaEntrada(){
    const { setEmail, setPassword } = useContext(InfoContext)

    return (
        <>
            <Container>
                <Title>Nova entrada</Title>
                <CadaInput type="text" placeholder="Valor" onChange={e => setEmail(e.target.value)}></CadaInput>
                <CadaInput type="text" placeholder="Descrição" onChange={e => setPassword(e.target.value)}></CadaInput>
                <BotaoEntrar> Salvar entrada </BotaoEntrar>
            </Container>
        </>
    )
};

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #8C11BE;
width: 375px;
height: 667px;
`

const Title = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 315px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
margin-bottom: 40px;
margin-top: 25px;
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