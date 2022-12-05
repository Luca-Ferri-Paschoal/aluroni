import styled from 'styled-components';
import { black, blue, grey, lightGrey } from 'styles/variaveis';

const OrdenadorInativo = `
  background-color: ${grey};
  color: inherit;
`;

const OrdenadorAtivo = `
  background-color: ${blue};
  color: #fff;
`;

const ativa = (ativo: boolean): string =>
	ativo
		? OrdenadorAtivo
		: OrdenadorInativo
;

export const OrdenadorButton = styled.button<{ ativo: boolean }>`
  align-items: center;
  ${(props):string => ativa(props.ativo)}
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  min-width: 240px;
  padding: 0 40px;
  position: relative;
  .OrdenadorButton__options {
    display: none;
    position: absolute;
    left: 0;
    flex-direction: column;
    top: 100%;
    width: 100%;
    &--ativo {
      display: flex;
    }
  }
  .OrdenadorButton__option {
    align-items: center;
    background-color: ${grey};
    border-top: 2px solid ${lightGrey};
    box-sizing: border-box;
    color: ${black};
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    &:hover,
    &--ativo {
      background-color: ${blue};
      cursor: pointer;
      color: white;
    }
  }
`;
