import styled from 'styled-components';
import { Container } from 'styles/Tema';
import { red } from 'styles/variaveis';

export const NotFoundContainer = styled(Container)`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const Voltar = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    button {
		background-color: transparent;
		border: none;
		color: ${red};
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: bold;
    }
`;
