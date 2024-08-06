import styled from "styled-components"
import Logo from "../assets/images/logo-black.webp"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
`
const Link = styled.a`
    cursor: pointer;
    font-weight: 500;
`
const ResizeLogo = styled.img`
    width: 10rem;
`

const Navigation = styled.nav`
    display: flex;
    gap: 50px;
`

function Header() {
    return (
        <HeaderWrapper>
            <Link href="#">
                <ResizeLogo src={Logo} alt="Logo Portfolio" />
            </Link>
            <Navigation>
                <Link>PROJETS</Link>
                <Link>A PROPOS</Link>
                <Link>CONTACT</Link>
            </Navigation>
        </HeaderWrapper>
    )
}

export default Header