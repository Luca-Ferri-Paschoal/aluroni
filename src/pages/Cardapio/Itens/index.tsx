import cardapio from './itens.json';
import Item from './Item';
import { ItensContainer } from './styled';

const Itens = () => {
    return (
        <ItensContainer>
            {cardapio.map(item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </ItensContainer>
    );
}
 
export default Itens;
