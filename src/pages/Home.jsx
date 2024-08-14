import styled from "styled-components"
import Banner from "../components/Banner"
import Project from "../components/Project"
import About from "../components/About"
import Contact from "../components/Contact"
import projects from "../assets/projects.json"

const MainWrapper = styled.main`

`
const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    border-radius: 20px;
    padding: 40px;
`

function Home() {
    return(
        <MainWrapper>
            <Banner />
            <Section id="projects">
                {projects.map((project) => (
                    <Project key={project.id} id={project.id} project={project} />
                ))}
            </Section>
            <About />
            <Contact />
        </MainWrapper>
    )
}

export default Home