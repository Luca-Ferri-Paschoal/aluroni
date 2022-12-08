import cardapio from 'Data/cardapio.json';
import { Titulo } from 'styles/Tema';
import { NossaCasa, Recomendado, Recomendados } from './styled';
import nossaCasaImg from 'assets/nossa_casa.png';
import IPrato from 'interfaces/IPrato';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
	const pratos = [...cardapio];
	const pratosRecomendados = pratos.sort(
		() => 0.5 - Math.random()
	).splice(0,3);

	const navigate = useNavigate();
	const redirecionarParaDetalhes = (prato: IPrato) => {
		navigate(`/prato/${prato.id}`);
	};

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
							onClick={() => redirecionarParaDetalhes(item)}
						>
							Ver mais
						</button>
					</Recomendado>
				))}
			</Recomendados>
			<Titulo>
				Nossa casa
			</Titulo>
			<NossaCasa>
				<img src={nossaCasaImg} alt='Casa do Aluroni'/>
				<div className='NossaCasa__endereco'>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</NossaCasa>
		</section>
	);
};
 
export default Inicio;
