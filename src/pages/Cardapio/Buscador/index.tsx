import { BuscadorContainer } from "./styled";

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
            />
        </BuscadorContainer>
    );
}
 
export default Buscador;
