import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import { NotFoundContainer, Voltar } from './styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<NotFoundContainer>
			<Voltar>
				<button 
					onClick={() => navigate(-1)}
				>
					{'< Voltar'}
				</button>
			</Voltar>
			<NotFoundImage/>
		</NotFoundContainer>
	);
};
 
export default NotFound;
