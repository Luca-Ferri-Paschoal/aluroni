import Cabecalho from 'Components/Cabecalho';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
	return (
		<>
			<Cabecalho/>
			<div>
				<Outlet/>
			</div>
		</>
	);
};
 
export default PaginaPadrao;