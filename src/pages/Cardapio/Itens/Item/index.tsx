import TagsPrato from 'Components/TagsPrato';
import IPrato from 'interfaces/IPrato';
import { useNavigate } from 'react-router-dom';
import { ItemContainer } from './styled';

const Item = (props: {
	prato: IPrato
}) => {
	const { prato } = props;
	const navigate = useNavigate();

	return (
		<ItemContainer
			onClick={() => navigate(`/prato/${prato.id}`)}
		>
			<div className='ItemContainer__imagem'>
				<img src={prato.photo} alt='imagem' />
			</div>
			<div className='ItemContainer__descricao'>
				<div className='ItemContainer__titulo'>
					<h2>{prato.title}</h2>
					<p>{prato.description}</p>
				</div>
				<TagsPrato
					{...prato}
				/>
			</div>
		</ItemContainer>
	);
};

export default Item;
