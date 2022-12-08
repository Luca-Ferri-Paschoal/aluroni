import IPrato from 'interfaces/IPrato';
import { TagsContainer } from './styled';

const TagsPrato = ({
	category,
	serving,
	price,
	size
}: IPrato) => {    
	return (
		<TagsContainer>
			<div
				className={`Tags__tipo ${category.label.toLowerCase()}`}
			>
				{category.label}
			</div>
			<div
				className='Tags__porcao'
			>
				{size}g
			</div>
			<div
				className='Tags__qtdpessoas'
			>
                Serve {serving} pessoa{
					serving === 1
						? ''
						: 's'
				}
			</div>
			<div
				className='Tags__valor'
			>
                R$ {price.toFixed(2)}
			</div>
		</TagsContainer>
	);
};

export default TagsPrato;
