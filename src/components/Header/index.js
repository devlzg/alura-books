import Logo from '../../components/Logo'
import OpcoesHeader from '../../components/OpcoesHeader';
import IconesHeader from '../../components/IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content:center;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}