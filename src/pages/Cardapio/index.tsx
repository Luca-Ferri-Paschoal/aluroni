import { useState } from 'react';
import Buscador from './Buscador';
import { CardapioContainer } from './styled';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import IOrdenador from 'interfaces/IOrdenador';
import { Titulo } from 'styles/Tema';

const Cardapio = () => {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState<IOrdenador>('');

	return (
		<CardapioContainer>
			<Titulo
				className='ExibeCardapio__titulo'
			>
				Cardápio
			</Titulo>
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
