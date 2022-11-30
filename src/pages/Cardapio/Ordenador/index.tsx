import { useState } from 'react';
import opcoes from './opcoes.json';
import { OrdenadorButton } from './styled';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Ordenador = (props: {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}) => {
    const {
        ordenador,
        setOrdenador,
    } = props;

    const [aberto, setAberto] = useState(false);
    const [nomeOrdenador, setNomeOrdenador] = useState('');

    const cssOptions = ():string => 
        `OrdenadorButton__options ${
            aberto
                ? `OrdenadorButton__options--ativo`
                : ``
        }`
    ;

    const cssIcons = {
        size: 20
    };

    return (
        <OrdenadorButton
            ativo={ordenador !== ''}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || 'Ordenar por'}</span>
            {aberto
                ? <MdKeyboardArrowUp {...cssIcons}/> 
                : <MdKeyboardArrowDown {...cssIcons}/>
            }
            <div
                className={cssOptions()}
            >
                {opcoes.map(opcao => 
                    <div
                        className='OrdenadorButton__option'
                        key={opcao.value}
                        onClick={() => {
                            setNomeOrdenador(opcao.nome)
                            setOrdenador(opcao.value)
                        }}
                    >
                        {opcao.nome}
                    </div>
                )}
            </div>
        </OrdenadorButton>
    );
}
 
export default Ordenador;