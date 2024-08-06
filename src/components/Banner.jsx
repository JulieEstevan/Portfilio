import styled from "styled-components"
import WomenIcon from "../assets/images/women-icon-black.webp"

const Section = styled.section`
    margin: 100px 80px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 5rem;
`
const Name = styled.h1`
    margin: 0 0 5px 0;
    font-size: 24px;
    font-weight: 400;
`
const Work = styled.p`
    font-size: 16px;
    opacity: 60%;
`
const Presentation = styled.p`
    font-size: 64px;

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