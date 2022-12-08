import styled from 'styled-components';
import { desktopXsm } from 'styles/breackpoints';
import { darkGrey, grey, red } from 'styles/variaveis';

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    flex-wrap: wrap;
    width: 90%;
    padding: 20px;
    transition: .2s ease-in;
    width: 90%;

    &:hover {
        background-color: ${grey};
        cursor: pointer;
    }

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
        margin: 0 20px;
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
