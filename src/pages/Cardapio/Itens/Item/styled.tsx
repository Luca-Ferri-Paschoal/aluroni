import styled from 'styled-components';
import { desktopXsm, mobile } from 'styles/breackpoints';
import { carnes, combos, darkGrey, massas, red, veganos } from 'styles/variaveis';

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;

    .ItemContainer__imagem {
        min-width: 240px;
        @media (max-width: ${desktopXsm}) {
            width: 100%;
        }   
    
        img {
            border-radius: 8px;
            width: 100%;
        }
    }

    .ItemContainer__descricao {
        display: flex;
        flex: 1;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 20px;
        @media (max-width: ${desktopXsm}) {
            flex-direction: row;
            margin-top: 20px;
            padding: 0;
        }
    }

    .ItemContainer__titulo {
        h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
        }
        p {
            color: ${darkGrey};
            font-size: 1.3rem;
            font-weight: 600;
            max-width: 600px;
            margin-bottom: 20px;
        }
    }

    .ItemContainer__tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;
        max-width: 700px;
        @media (max-width: ${desktopXsm}) {
            justify-content: flex-end;
        }
        @media (max-width: ${mobile}) {
            justify-content: flex-start;
        }
        > div {
            margin: 10px;
        }
    }

    .ItemContainer__tipo {
        align-items: center;
        border-radius: 2px;
        display: flex;
        font-weight: bold;
        height: 40px;
        justify-content: center;
        padding: 10px 30px;
    }

    .massas {
        background-color: ${massas};
        color: white;
    }
    .carnes {
        background-color: ${carnes};
        color: white;
    }
    .combos {
        background-color: ${combos};
    }
    .veganos {
        background-color: ${veganos};
    }
    
    .ItemContainer__porcao,
    .ItemContainer__qtdpessoas,
    .ItemContainer__valor {
      align-items: center;
      display: flex;
      font-size: 1.25rem;
      font-weight: bold;
      justify-content: center;
    }

    .ItemContainer__valor {
      color: ${red};
      font-size: 1.7rem;
    }
`;
