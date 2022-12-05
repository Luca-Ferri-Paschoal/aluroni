import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'Components/Menu';
import Cabecalho from 'Components/Cabecalho';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import PaginaPadrao from 'Components/PaginaPadrao';

const AppRouter = () => {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route
						path='/'
						element={<PaginaPadrao />}
					>
						<Route 
							index 
							element={<Inicio/>}
						/>
						<Route
							path='cardapio'
							element={<Cardapio/>}	
						/>
					</Route>
				</Routes>
			</Router>
		</main>
	);
};

export default AppRouter;
