import styled from 'styled-components';
import { red, redDark } from 'styles/variaveis';

export const Recomendados = styled.div`
    border-radius: 2px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
`;

export const Recomendado = styled.div`
    .Recomendado__imagem {
        width: 300px;
        margin-bottom: 10px;
        img {
            border-radius: 8px;
            width: 100%;
        }
    }
    
    .Recomendado__botao {
        background-color: ${red};
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 10px 0;
        transition: .2s ease;
        width: 100%;
        &:hover {
            background-color: ${redDark};
        }
    }
`;

export const NossaCasa = styled.div`
    margin-bottom: 100px;
    position: relative;
    width: 100%;

    img {
        border-radius: 5px;
        width: 100 %;
    }
    
    .NossaCasa__endereco {
        align-items: center;
        background-color: $dark;
        border-radius: 5px;
        bottom:-45px;
        color: white;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        height: 100px;
        justify-content: center;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 200px;
    }
`;
