import IPrato from 'interfaces/IPrato';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import {
	Voltar,
	Container,
	Titulo,
	Imagem,
	Conteudo,
} from './styled';
import cardapio from 'Data/cardapio.json';
import TagsPrato from 'Components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'Components/PaginaPadrao';

const Prato = () => {
	const { id } = useParams();
	const prato = cardapio.find(
		item => item.id === Number(id)
	) as IPrato;

	const navigate = useNavigate();

	return prato ? 
		(
			<Routes>
				<Route 
					path='*'
					element={<PaginaPadrao/>}
				>
					<Route index element={
						<>
							<Voltar
								onClick={() => navigate(-1)}
							>
								{'< Voltar'}
							</Voltar>
							<Container>
								<Titulo>
									{prato.title}
								</Titulo>
								<Imagem>
									<img src={prato.photo} alt={prato.title} />
								</Imagem>
								<Conteudo>
									<p
										className='Conteudo__descricaoa'
									>
										{prato.description}
									</p>
									<TagsPrato
										{...prato}
									/>
								</Conteudo>
							</Container>
						</>
					}/>
				</Route>
			</Routes>
		)

		:

		(
			<NotFound/>
		)
	;
};

export default Prato;
