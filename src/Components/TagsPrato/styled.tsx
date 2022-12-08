import styled from 'styled-components';
import { desktopXsm, mobile } from 'styles/breackpoints';
import { massas, carnes, combos, veganos, red } from 'styles/variaveis';

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 700px;

    @media(max-width: ${desktopXsm}) {
        justify-content: flex-end;
    }
	
    @media(max-width: ${mobile}) {
        justify-content: flex-start;
    }
  	div {
        margin: 10px;
    }
    .Tags__tipo {
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
    .Tags__porcao,
    .Tags__qtdpessoas,
    .Tags__valor {
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        font-weight: bold;
        justify-content: center;
    }
    .Tags__valor {
        color: ${red};
        font-size: 1.7rem;
    }
`;
