import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './Buscador';
import { Cabecalho, ExibeCardapio, Menu } from './styled';
import Filtros from './Filtros';
import Ordenador from './Ordenador';

const Cardapio = () => {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    
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
                <div
                    className='ExibeCardapio__filtros'
                >
                    <Filtros
                        filtro={filtro}
                        setFiltro={setFiltro}
                    />
                    <Ordenador
                        ordenador={ordenador}
                        setOrdenador={setOrdenador}
                    />
                </div>
            </ExibeCardapio>
        </main>
    );
}
 
export default Cardapio;
