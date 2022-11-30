import { BuscadorContainer } from "./styled";
import { CgSearch } from 'react-icons/cg';

const Buscador = (props: {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}) => {
    const {
        busca, 
        setBusca
    } = props;

    return (
        <BuscadorContainer>
            <input
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder='Buscar'
            />
            <CgSearch
                size={20}
                color='#4c4d5e'
            />
        </BuscadorContainer>
    );
}
 
export default Buscador;
