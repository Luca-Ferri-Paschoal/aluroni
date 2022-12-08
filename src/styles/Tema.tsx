import styled from 'styled-components';
import { desktopXsm, desktopSm, desktopMd } from './breackpoints';
import { paddingHorizontalMobile, paddingHorizontalSm, paddingHorizontalMd, paddingHorizontal, dark } from './variaveis';

export const Container = styled.section`
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
`;

export const Titulo = styled.h3`
  color: ${dark};
  font-size: 3rem;
  margin-bottom: 30px;
`;
