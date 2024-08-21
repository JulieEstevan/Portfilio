import styled from "styled-components"
import Logo from "../assets/images/logo-black.webp"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    @media (max-width: 1059px) {
        font-size: 14px;
    }
    @media (max-width: 759px) {
        margin: 10px 0;
        font-size: 12px;
    }
    @media (max-width: 479px) {
        margin: 10px 0;
        font-size: 10px;
    }
`
const Link = styled.a`
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: black;
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`
const ResizeLogo = styled.img`
    width: 10rem;
    @media (max-width: 1059px) {
        width: 8rem;
    }
    @media (max-width: 479px) {
        width: 6rem;
    }
`

const Navigation = styled.nav`
    display: flex;
    gap: 50px;
    @media (max-width: 759px) {
        gap: 20px;
    }
    @media (max-width: 479px) {
        gap: 10px;
    }
`

function Header() {
    return (
        <HeaderWrapper>
            <Link href="#">
                <ResizeLogo src={Logo} alt="Logo Portfolio" />
            </Link>
            <Navigation>
                <Link href="#projects">PROJETS</Link>
                <Link href="#about">A PROPOS</Link>
                <Link href="#contact">CONTACT</Link>
            </Navigation>
        </HeaderWrapper>
    )
}

export default Header