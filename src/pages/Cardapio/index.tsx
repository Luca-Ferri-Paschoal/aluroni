import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import { Cabecalho, ExibeCardapio, Menu } from './styled';

const Cardapio = () => {
    const [busca, setBusca] = useState('');
    
    return (
        <main>
            <Menu>
                <Logo/>
            </Menu>
            <Cabecalho>
                <div className='Cabecalho__texto'>A casa do código e da massa</div>
            </Cabecalho>
            <ExibeCardapio>
                <h3 className='ExibeCardapio__titulo'>Cardápio</h3>
                <Buscador
                    busca={busca}
                    setBusca={setBusca}
                />
            </ExibeCardapio>
        </main>
    );
}
 
export default Cardapio;
