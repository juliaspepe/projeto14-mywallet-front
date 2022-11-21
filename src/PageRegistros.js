import styled from "styled-components"
import { InfoContext } from "./InfoContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PageRegistros() {
    const { config, userName } = useContext(InfoContext);
    const [cashflow, setCashflow] = useState('');
    const [theresEntry, setTheresEntry] = useState('');
    const navigate = useNavigate();
    const [sum, setSum] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/registros", config)
            .then((item) => {
                somaTotal(item.data)
                setCashflow(item.data);
                setTheresEntry(true);
            })
            .catch(() => alert('deu ruim'))
    }, []);

    function somaTotal(item){
        let total = 0;
        item.forEach(element => total = parseInt(element.value) + total);
        setSum(total);
    }

    return (
        <Container>
            <Title>
                <p> Olá, {userName} </p>
                <ion-icon onClick={() => navigate('/logout')} name="exit-outline"></ion-icon>
            </Title>
            <ContainerRegistros>
                {theresEntry ?
                    <>
                        {cashflow.map((each) =>
                            <ContainerValores>
                                <CadaDia> {each.day} </CadaDia>
                                <CadaDescricao> {each.description} </CadaDescricao>
                                <CadaValor type={each.type}> {each.value} </CadaValor>
                            </ContainerValores>)}
                        <Saldo>
                            <h2>SALDO</h2>
                            <p>{sum}</p>
                        </Saldo>
                    </>
                    :

                    <h1>Não há registros de entrada ou saída</h1>}
            </ContainerRegistros>
            <ContainerBotao>
                <BotaoEntrada  onClick={() => navigate('/entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                        <p> Nova entrada </p>
                </BotaoEntrada>
                <BotaoSaida onClick={() => navigate('/saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                        <p> Nova saída </p>
                </BotaoSaida>
            </ContainerBotao>
        </Container>
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
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 315px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 22px;
        margin-top: 25px;
    }

    ion-icon{
        width: 30px;
        height: 30px;
        color: white;
    }
`

const ContainerRegistros = styled.div`
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 13px;
    h1{
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
        margin-top: 200px;
        text-align: center;
    }
`

const ContainerValores = styled.div`
width: 300px;
display: flex;
margin-top: 20px;
`

const CadaDia = styled.div`
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
margin-right: 10px;
`

const CadaDescricao = styled.div`
width: 250px;
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
`

const CadaValor = styled.div`
width: 300px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
justify-content: flex-end;
color: ${props => props.type === "saida" ? "#C70000" : "#03AC00"}; 
`

const Saldo = styled.div`
width: 290px;
height: 436px;
display: flex;
justify-content: space-between;
position: absolute;
left: 40px;
top: 490px;

    h2 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }
`

const ContainerBotao = styled.div`
width: 326px;
height: 46px;
display: flex;
justify-content: space-between;
`

const BotaoEntrada = styled.button`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
margin-bottom: 36px;
font-family: 'Raleway';
font-weight: 700;
font-size: 17px;
line-height: 23px;
color: #FFFFFF;
    p{
        width: 44px;
        height: 40px;
        margin-bottom: 8px;
        color: #FFFFFF;
     }

     ion-icon{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
     }
`

const BotaoSaida = styled.button`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
margin-bottom: 36px;
font-family: 'Raleway';
font-weight: 700;
font-size: 17px;
line-height: 23px;
color: #FFFFFF;
    p{
        width: 44px;
        height: 40px;
        margin-bottom: 8px;
        color: #FFFFFF;
     }

     ion-icon{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
     }
`