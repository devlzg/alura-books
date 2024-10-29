import styled from "styled-components"

const Opcao = styled.li`
  	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100%;
	padding: 0 5px;
	cursor: pointer;
	min-width: 120px;

`
const Opcoes = styled.ul`
    display: flex;
`

const headerOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
export default function OpcoesHeader() {
    return(
        <Opcoes>
            {headerOptions.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) )}
        </Opcoes>
    )
}