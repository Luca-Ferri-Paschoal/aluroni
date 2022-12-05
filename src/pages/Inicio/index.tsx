import cardapio from 'Data/cardapio.json';
import { Recomendado, Recomendados, Titulo } from './styled';

const Inicio = () => {
	const pratos = [...cardapio];
	const pratosRecomendados = pratos.sort(
		() => 0.5 - Math.random()
	).splice(0,3);

	return (
		<section>
			<Titulo>
                Recomendações da cozinha
			</Titulo>
			<Recomendados>
				{pratosRecomendados.map(item => (
					<Recomendado
						key={item.id}
					>
						<div
							className='Recomendado__imagem'
						>
							<img
								src={item.photo}
								alt={item.title}
							/>
						</div>
						<button
							className='Recomendado__botao'
						>
							Ver mais
						</button>
					</Recomendado>
				))}
			</Recomendados>
		</section>
	);
};
 
export default Inicio;
