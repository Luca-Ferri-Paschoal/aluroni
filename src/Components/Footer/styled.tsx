import styled from 'styled-components';
import { desktopXsm, desktopSm, desktopMd } from 'styles/breackpoints';
import { red, paddingHorizontal, paddingHorizontalMobile, paddingHorizontalSm, paddingHorizontalMd } from 'styles/variaveis';

export const FooterContainer = styled.footer`
	background-color: ${red};
	display: flex;
	justify-content: flex-end;
	padding: 10px ${paddingHorizontal};
	@media (max-width: ${desktopXsm}) {
		padding: 10px ${paddingHorizontalMobile};
	}
	@media (min-width: ${desktopXsm}) and (max-width: ${desktopSm}) {
		padding: 10px ${paddingHorizontalSm};
	}
	@media (min-width: ${desktopSm}) and (max-width: ${desktopMd}) {
		padding: 10px ${paddingHorizontalMd};
	}
`;
