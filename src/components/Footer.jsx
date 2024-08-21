import styled from "styled-components"
import ReactLogo from "../assets/images/React-logo.webp"
import NetlifyLogo from "../assets/images/Netlify-logo.webp"

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 30px 0 20px;
    @media (max-width: 1059px) {
        font-size: 14px;
        gap: 0px;
    }
    @media (max-width: 479px) {
        margin: 10px 0;
        font-size: 12px;
    }
`
const LinksWrapper = styled.div`
    display:flex;
    gap: 30px;
    height: 30px;
    @media (max-width: 1059px) {
        gap: 20px;
    }
    @media (max-width: 479px) {
        gap: 10px;
    }
`
const Link = styled.a`
    display: flex;
    color: black;
    align-items: center;
    padding: 5px;
    gap: 5px;
    @media (max-width: 479px) {
        padding: 0 2px;
        gap: 0;
    }
`
const Description = styled.div`
    display: flex;
    align-items: center;
`
const LogoSize = styled.img`
    width: 2rem;
    @media (max-width: 479px) {
        width: 1.5rem;
    }
`

function Footer() {
    return(
        <FooterWrapper>
            <LinksWrapper>
                <Link href="mailto:julie.s.estevan@gmail.com">
                    <i className="fa-solid fa-square-envelope fa-2xl"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/julie-estevan/" target="_blank">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </Link>
                <Link href="https://github.com/JulieEstevan" target="_blank">
                    <i className="fa-brands fa-square-github fa-2xl"></i>
                </Link>
            </LinksWrapper>
            
            <Description>
                <p>Développé avec</p>
                <Link href="https://fr.react.dev/" target="_blank">
                    <LogoSize src={ReactLogo} alt="logo React" />
                    <p>React</p>
                </Link>
                <p>et hébergé sur</p>
                <Link href="https://www.netlify.com/" target="_blank">
                    <LogoSize src={NetlifyLogo} alt="logo Netlify" />
                    <p>Netlify</p>
                </Link>
            </Description>
            <p>© Julie Estevan</p>
        </FooterWrapper>
    )
}

export default Footer