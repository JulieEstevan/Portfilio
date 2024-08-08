import styled from "styled-components"
import Competence from "./Competence"
import ResumeIcon from "../assets/images/cv-logo-black.webp"

const Section = styled.section`
    margin: 100px 80px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`
const Presentation = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
`
const Icon = styled.img`
    width: 6rem;
`
const TitleResume = styled.h2`
    margin: 0 0 20px 0;
    font-size: 36px;
    font-weight: 400;
`
const Text = styled.p`
    font-size: 18px;
    opacity: 60%;
    line-height: 1.5;
`
const Title = styled.h3`
    margin: 0 0 5px 0;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
`
const CompetencesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
`

function About() {
    return(
        <Section>
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