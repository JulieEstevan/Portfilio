import styled from "styled-components"
import WomenIcon from "../assets/images/women-icon-black.webp"

const Section = styled.section`
    margin: 100px 80px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 1059px) {
        margin: 60px;
    }
    @media (max-width: 759px) {
        margin: 40px;
        gap: 20px;
    }
    @media (max-width: 479px) {
        margin: 20px;
        gap: 10px;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 6rem;
    @media (max-width: 1059px) {
        width: 4rem;
    };
`
const Name = styled.h1`
    margin: 0 0 5px 0;
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 1059px) {
        font-size: 20px;
    };
    @media (max-width: 599px) {
        font-size: 16px;
    }
`
const Work = styled.p`
    font-size: 16px;
    opacity: 60%;
    @media (max-width: 1059px) {
        font-size: 14px;
    };
    @media (max-width: 599px) {
        font-size: 12px;
    }
`
const Presentation = styled.p`
    font-size: 58px;
    @media (max-width: 1279px) {
        font-size: 38px;
    };
    @media (max-width: 1059px) {
        font-size: 30px;
    };
    @media (max-width: 759px) {
        font-size: 26px
    }
    @media (max-width: 599px) {
        font-size: 22px;
    }
    @media (max-width: 479px) {
        font-size: 18px;
    }
`

function Banner() {
    return(
        <Section>
                <Title>
                    <Icon src={WomenIcon} />
                    <div>
                        <Name>Julie Estevan</Name>
                        <Work>Dev Front Junior</Work>
                    </div>
                </Title>
                <Presentation>
                Bienvenue sur mon Portfolio ! <br/>Je suis une développeuse web frontend fraîchement diplômée.
                </Presentation>
            </Section>
    )
}

export default Banner