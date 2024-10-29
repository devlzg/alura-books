import './style.css'

const headerOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
export default function OpcoesHeader() {
    return(
        <ul className='opcoes'>
            {headerOptions.map( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) )}
        </ul>
    )
}