import { ReactComponent as Logo } from 'assets/logo.svg';
import { MenuContainer } from './styled';
import { Link } from 'react-router-dom';

const Menu = () => {
	const rotas = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Cardá0pio',
			to: '/cardapio'
		},
		{
			label: 'Sobre',
			to: '/sobre'
		}
	];

	return (
		<MenuContainer>
			<Logo />
			<ul
				className='Menu__list'
			>
				{rotas.map((rotas, index) => (
					<li 
						className='Menu__link'
						key={index} 
					>
						<Link 
							to={rotas.to}
						>
							{rotas.label}
						</Link>
					</li>
				))}
			</ul>
		</MenuContainer>
	);
};

export default Menu;
