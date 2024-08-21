import styled from "styled-components"
import Competence from "./Competence"
import ResumeIcon from "../assets/images/cv-logo-black.webp"

const Section = styled.section`
    margin: 0 80px;
    padding: 100px 0 200px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: 1059px) {
        margin: 0 60px;
        padding: 60px 0 80px 0;
        gap: 30px;
    }
    @media (max-width: 759px) {
        margin: 0 40px;
        padding: 40px 0 60px 0;
    }
    @media (max-width: 479px) {
        margin: 0 20px;
        padding: 20px 0px;
        gap: 20px;
    }
`
const Presentation = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
`
const Icon = styled.img`
    width: 6rem;
    @media (max-width: 1059px) {
        width: 4rem;
    }
    @media (max-width: 759px) {
        display: none;
    }
`
const TitleResume = styled.h2`
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 400;
    @media (max-width: 1249px) {
        font-size: 30px;
    };
    @media (max-width: 1059px) {
        font-size: 26px;
    };
    @media (max-width: 599px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`
const Text = styled.p`
    font-size: 18px;
    opacity: 60%;
    line-height: 1.5;
    @media (max-width: 1249px) {
        font-size: 16px;
    };
    @media (max-width: 1059px) {
        font-size: 14px;
    };
    @media (max-width: 599px) {
        font-size: 12px;
        text-align: justify;
    }
`
const Title = styled.h3`
    margin: 0 0 5px 0;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    @media (max-width: 1249px) {
        font-size: 26px;
    };
    @media (max-width: 1059px) {
        font-size: 24px;
    };
    @media (max-width: 599px) {
        font-size: 18px;
    }
`
const CompetencesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    @media (max-width: 1059px) {
        gap: 30px;
    };
    @media (max-width: 599px) {
        gap: 15px;
    }
`

function About() {
    return(
        <Section id="about">
            <Presentation>
                <Icon src={ResumeIcon} alt="Icon CV" />
                <div>
                    <TitleResume>Mon parcours</TitleResume>
                    <Text>
                        Anciennement apprentie préparatrice en pharmacie, j'ai dû, suite à des soucis de santé,
                        arrêter mes études et entamer une reconversion professionnelle.<br/>
                        Avec l'aide de différents organismes, je me suis orientée vers les métiers du numérique,
                        et plus spécifiquement le développement Web.<br/>
                        En intégrant la formation diplômante d'Intégrateur Web d'Openclassrooms,
                        je me suis trouvée une nouvelle passion et je peux désormais débuter
                        mon nouvel avenir professionnel.
                    </Text>
                </div>
            </Presentation>
            <Title>Mes compétences</Title>
            <CompetencesWrapper>
                <Competence icon="fa-solid fa-sitemap fa-3x" text="Découpage, structuration et création d'un site Web" />
                <Competence icon="fa-solid fa-file-code fa-3x" text="Création d'algorithmes et de programmes" />
                <Competence icon="fa-solid fa-bug-slash fa-3x" text="Écrire et effectuer des tests afin de résoudre les bugs" />
                <Competence icon="fa-solid fa-universal-access fa-3x" text="Optimisation et mise en place de l'accessibilité Web" />
                <Competence icon="fa-solid fa-magnifying-glass fa-3x" text="Apprendre et chercher de nouvelles technologies" />
                <Competence icon="fa-solid fa-pen-ruler fa-3x" text="Lecture, intégration et adaptation de maquettes" />
                <Competence icon="fa-solid fa-house-laptop fa-3x" text="Gestion personnelle, autonomie et Télétravail" />
                <Competence icon="fa-solid fa-users-rectangle fa-3x" text="Connaissances des méthodes de travail Agile en équipe" />
            </CompetencesWrapper>
        </Section>
    )
}

export default About