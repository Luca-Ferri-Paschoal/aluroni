import styled from 'styled-components';
import backgroundImage from 'assets/header.png';
import {
	dark,
	paddingHorizontal,
	paddingHorizontalMd,
	paddingHorizontalMobile,
	paddingHorizontalSm
} from '../../styles/variaveis';
import { desktopMd, desktopSm, desktopXsm } from '../../styles/breackpoints';

export const Menu = styled.nav`
    padding: 20px ${paddingHorizontal};
    @media (max-width: ${desktopXsm}) {
      padding: 20px ${paddingHorizontalMobile};
    }
    @media (min-width: ${desktopXsm}) and (max-width: ${desktopSm}) {
      padding: 20px ${paddingHorizontalSm};
    }
    @media (min-width: ${desktopSm}) and (max-width: ${desktopMd}) {
      padding: 20px ${paddingHorizontalMd};
    }
`;
  
export const Cabecalho = styled.header`
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    height: 300px;
    padding: 0px ${paddingHorizontal};
    @media (max-width: ${desktopXsm}) {
      padding: 0px ${paddingHorizontalMobile};
    }
    @media (min-width: ${desktopXsm}) and (max-width: ${desktopSm}) {
      padding: 0px ${paddingHorizontalSm};
    }
    @media (min-width: ${desktopSm}) and (max-width: ${desktopMd}) {
      padding: 0px ${paddingHorizontalMd};
    }
    .Cabecalho__texto {
      color: white;
      font-size: 5rem;
      min-width: 400px;
      width: 40%;
    }
`;
  
export const ExibeCardapio = styled.section`
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
