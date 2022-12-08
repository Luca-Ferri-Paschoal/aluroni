import styled from 'styled-components';
import { darkestGrey, red } from 'styles/variaveis';

export const Voltar = styled.button`
    background-color: transparent;
    border: none;
    color: ${red};
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;

`;

export const Container = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Titulo = styled.h1`
    font-size: 3rem;
`;

export const Imagem = styled.div`
    width: 600px;

    img {
      border-radius: 8px;
      width: 100%;
    }
`;

export const Conteudo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    
    .Conteudo__descricao {
        color: ${darkestGrey};
        font-size: 1.5rem;
        font-weight: bold;
    }
        
    .Conteudo____detalhes {
        display: flex;
        justify-content: space-between;
    }
`;
