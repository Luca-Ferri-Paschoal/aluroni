import Cabecalho from 'Components/Cabecalho';
import { Outlet } from 'react-router-dom';
import { Container } from 'styles/Tema';

const PaginaPadrao = () => {
	return (
		<>
			<Cabecalho/>
			<Container>
				<Outlet/>
			</Container>
		</>
	);
};
 
export default PaginaPadrao;