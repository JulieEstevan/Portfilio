import styled from "styled-components"
import Banner from "../components/Banner"
import About from "../components/About"
import Contact from "../components/Contact"

const MainWrapper = styled.main`

`
function Home() {
    return(
        <MainWrapper>
            <Banner />
            <section />
            <About />
            <Contact />
        </MainWrapper>
    )
}

export default Home