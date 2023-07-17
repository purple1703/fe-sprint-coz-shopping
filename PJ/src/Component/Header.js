import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';
import logo from "../assets/logo.png";
import hamburger from "../assets/icon.png";

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);

    function menuPopUp() {
        setIsMenu(!isMenu);
    }

    return (
        <>
            { isMenu === true ? <Menu isMenu={isMenu} menuPopUp={menuPopUp} /> : null }
            <HeaderBackground>
                <HeaderLeft>
                    <RouterLink to="/"><HeaderLogo src={logo} /></RouterLink>
                    <RouterLink to="/"><HeaderTitle>COZ Shopping</HeaderTitle></RouterLink>
                </HeaderLeft>
                <HeaderRight>
                    <HeaderHamburger src={hamburger} onClick={ menuPopUp } />
                </HeaderRight>
            </HeaderBackground>
        </>
    );
}


// styled-components
const HeaderBackground = styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 5rem;
    padding: 0 5rem;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 10;
`

const HeaderLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const HeaderLogo = styled.img`
    width: 55px;
    height: 30px;
`

const HeaderTitle = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin-left: 12px;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`

const HeaderHamburger = styled.img`
    width: 34px;
    height: 24px;
`

const RouterLink = styled(Link)`
    text-decoration: none;
    color: black;
`