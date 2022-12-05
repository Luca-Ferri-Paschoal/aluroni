import styled from 'styled-components';
import { desktopXsm, desktopSm, desktopMd } from 'styles/breackpoints';
import { paddingHorizontal, paddingHorizontalMobile, paddingHorizontalSm, paddingHorizontalMd, darkGrey, dark } from 'styles/variaveis';

export const MenuContainer = styled.nav`
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

	display: flex;

	.Menu__list {
		align-items: center;
		display: flex;
	}

	.Menu__link {
		list-style-type: none;
		padding: 0 20px;
		a {
		color: ${dark};
		cursor: pointer;
		font-size: 24px;
		font-weight: 600;
		text-decoration: none;
		transition: .2s ease;
		&:hover {
			color: ${darkGrey};
		}
		}
	}
`;
