import styled from 'styled-components';
import {
	dark,
	paddingHorizontal,
	paddingHorizontalMd,
	paddingHorizontalMobile,
	paddingHorizontalSm
} from '../../styles/variaveis';
import { desktopMd, desktopSm, desktopXsm } from '../../styles/breackpoints';
  
export const CardapioContainer = styled.section`
    padding: 50px ${paddingHorizontal};
    @media (max-width: ${desktopXsm}) {
      padding: 50px ${paddingHorizontalMobile};
    }

    @media (min-width: ${desktopXsm}) and (max-width: ${desktopSm}) {
      padding: 50px ${paddingHorizontalSm};
    }

    @media (min-width: ${desktopSm}) and (max-width: ${desktopMd}) {
      padding: 50px ${paddingHorizontalMd};
    }

    .ExibeCardapio__titulo {
      color: ${dark};
      font-size: 3rem;
      margin-bottom: 30px;
    }

    .ExibeCardapio__filtros {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 30px;
      width: 100%;
    }
`;
