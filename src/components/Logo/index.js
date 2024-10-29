import './style.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} className='logo-img' alt="logo do site"/>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;