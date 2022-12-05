import styled from 'styled-components';
import { desktopXsm, desktopSm, desktopMd } from 'styles/breackpoints';
import { paddingHorizontal, paddingHorizontalMd, paddingHorizontalMobile, paddingHorizontalSm } from 'styles/variaveis';
import backgroundImage from 'assets/header.png';

export const CabecalhoContainer = styled.header`
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
