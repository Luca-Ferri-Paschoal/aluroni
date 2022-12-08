import styled from 'styled-components';

export const SobreNos = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 50px;
	
	.SobreNos__texto {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: justify;

		p {
			font-family: 'Josefin Sans', sans-serif;
		}
	}
`;

export const Imagens = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-between;

	Imagem {
		width: 600px;
		img {
			border-radius: 5px;
			width: 100 %;
		}
	}
`;
