import IItemCardapio from 'interfaces/IItemCardapio';
import { ItemContainer } from './styled';

const Item = (props: IItemCardapio) => {
	const {
		title,
		description,
		photo,
		size,
		serving,
		price,
		category
	} = props;

	return (
		<ItemContainer>
			<div className='ItemContainer__imagem'>
				<img src={photo} alt='imagem' />
			</div>
			<div className='ItemContainer__descricao'>
				<div className='ItemContainer__titulo'>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className='ItemContainer__tags'>
					<div className={`ItemContainer__tipo ${category.label.toLowerCase()}`}>
						{category.label}
					</div>
					<div className='ItemContainer__porcao'>
						{size}g
					</div>
					<div className='ItemContainer__qtdpessoas'>
						{serving} pessoa{serving === 1 ? '' : 's'}
					</div>
					<div className='ItemContainer__valor'>
                        R$ {price.toFixed(2)}
					</div>
				</div>
			</div>
		</ItemContainer>
	);
};

export default Item;
