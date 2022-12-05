import filtros from './filtros.json';
import { FiltrosContainer } from './styled';
import IOpcao from 'interfaces/IOpcao';

const Filtros = (props: {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}) => {
	const {
		filtro,
		setFiltro,
	} = props;

	const selecionarFiltro = (opcao: IOpcao): void => {
		opcao.id === filtro
			? setFiltro(null)
			: setFiltro(opcao.id)
		;
	};

	const cssBotao = (opcao: IOpcao): string =>
		`FiltrosContainer__filtro ${
			opcao.id === filtro
				? 'FiltrosContainer__filtro--ativo'
				: ''
		}`
    ;

	return (
		<FiltrosContainer>
			{filtros.map(opcao => 
				<button
					className={cssBotao(opcao)}
					key={opcao.id}
					onClick={() => selecionarFiltro(opcao)}
				>
					{opcao.label}
				</button>
			)}
		</FiltrosContainer>
	);
};
 
export default Filtros;
