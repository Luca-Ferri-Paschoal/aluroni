import cardapio from './itens.json';
import Item from './Item';
import { ItensContainer } from './styled';
import { useCallback, useEffect, useState } from 'react';
import IItem from 'interfaces/IItem';
import IOrdenador from 'interfaces/IOrdenador';
import OrdenadorEnum from 'Enums/OrdenadorEnum';

const Itens = (props: {
    busca: string,
    filtro: number | null,
    ordenador: IOrdenador,
}) => {
	const {
		busca,
		filtro,
		ordenador
	} = props;

	const [lista, setLista] = useState([...cardapio]);

	const aplicaTestes = useCallback((cardapio: IItem[]): IItem[] => {
		const testaBusca = (
			exp: RegExp, 
			titulo: string
		): boolean => {
			return exp.test(titulo);
		};
    
		const testaFiltro = (
			filtro: number | null,
			id: number
		): boolean => {
			return filtro
				? id === filtro
				: true
			;
		};
    
		const testaOrdenador = (
			item1: IItem,
			item2: IItem
		): number => {
			if (ordenador !== '') {
				const categoria = OrdenadorEnum[ordenador];
                
				if (
					item1[categoria] > item2[categoria]
				) return 1;
    
				else if (
					item1[categoria] < item2[categoria]
				) return -1;
    
				else return 0;
			}
    
			return 0;
		};

		const exp = new RegExp(busca.trim(), 'ig');

		return cardapio.filter(
			item => 
				testaBusca(exp, item.title) &&
                testaFiltro(filtro, item.category.id)
		).sort(testaOrdenador);
	}, [busca, filtro, ordenador] );

	useEffect(() => {
		setLista(aplicaTestes(cardapio));
	}, [busca, filtro, ordenador, aplicaTestes]);

	return (
		<ItensContainer>
			{lista.map(item => (
				<Item
					key={item.id}
					{...item}
				/>
			))}
		</ItensContainer>
	);
};
 
export default Itens;
