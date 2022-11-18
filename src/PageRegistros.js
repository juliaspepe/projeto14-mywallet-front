import styled from "styled-components"

export default function PageRegistros() {
    return (
        <>
            <Container>
                <Title>
                    <p> Olá, Fulano </p>
                    <ion-icon name="exit-outline"></ion-icon>
                </Title>
                <ContainerRegistros>
                    <h1>Não há registros de entrada ou saída</h1>
                </ContainerRegistros>
                <ContainerBotao>
                    <BotaoEntrada>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p> Nova entrada </p>
                    </BotaoEntrada>
                    <BotaoSaida>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p> Nova saída </p>
                    </BotaoSaida>
                </ContainerBotao>
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
justify-content: center;
align-items: center;
margin-bottom: 13px;

    h1{
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;  
        text-align: center;
        color: #868686;
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
     }

     ion-icon{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
     }
`