import { useState } from 'react';
import Buscador from './Buscador';
import { CardapioContainer } from './styled';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import IOrdenador from 'interfaces/IOrdenador';

const Cardapio = () => {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState<IOrdenador>('');

	return (
		<CardapioContainer>
			<h3
				className='ExibeCardapio__titulo'
			>
				Cardápio
			</h3>
			<Buscador
				busca={busca}
				setBusca={setBusca}
			/>
			<div
				className='ExibeCardapio__filtros'
			>
				<Filtros
					filtro={filtro}
					setFiltro={setFiltro}
				/>
				<Ordenador
					ordenador={ordenador}
					setOrdenador={setOrdenador}
				/>
			</div>
			<Itens
				busca={busca}
				filtro={filtro}
				ordenador={ordenador}
			/>
		</CardapioContainer>
	);
};

export default Cardapio;
