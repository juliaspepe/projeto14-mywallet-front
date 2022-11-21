import styled from "styled-components"
import { useContext } from "react";
import { InfoContext } from "./InfoContext";
import { useNavigate } from "react-router-dom";

export default function PageLogout(){
    const { userName } = useContext(InfoContext);
    const navigate = useNavigate();

    return(
        <ContainerLogout> 
            <h1> {userName}, tem certeza que deseja sair? </h1>
            <BotaoSim onClick={() => navigate('/')}> Tenho, obrigado(a) </BotaoSim>
            <BotaoNao onClick={() => navigate('/registros')}> Não, acho que vou ficar mais um tempinho :) </BotaoNao>
        </ContainerLogout>
       
    )
}

const ContainerLogout = styled.div`
width: 375px;
height: 667px;
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 60px;

    h1{
        color: black;
        font-size: 18px;  
        margin-bottom: 25px;      
        width: 200px;
        text-align: center;
    }
`

const BotaoSim = styled.button`
width: 200px;
height: 60px;
background: #A328D6;
border-radius: 5px;
margin-bottom: 20px;
font-family: 'Raleway';
font-weight: 700;
font-size: 16px;
line-height: 23px;
color: #FFFFFF;
box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
`

const BotaoNao = styled.button`
width: 200px;
height: 60px;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-weight: 700;
font-size: 16px;
line-height: 23px;
color: #FFFFFF;
box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
`