import './style.css'
import Logo from '../../components/Logo'
import OpcoesHeader from '../../components/OpcoesHeader';
import IconesHeader from '../../components/IconesHeader';

export default function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}