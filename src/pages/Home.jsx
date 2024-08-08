import styled from "styled-components"
import Banner from "../components/Banner"
import About from "../components/About"

const MainWrapper = styled.main`

`
function Home() {
    return(
        <MainWrapper>
            <Banner />
            <section />
            <About />
            <section />
        </MainWrapper>
    )
}

export default Home