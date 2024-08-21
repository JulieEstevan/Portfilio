import { useState } from 'react'
import styled from "styled-components"

const SliderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 25px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    @media (max-width: 599px) {
        display: none;
    }
`
const Paging = styled.div`
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -0%);
`
const Arrow = styled.button`
    height: 40px;
    cursor: pointer;
    border: none;
    background-color: inherit;
    margin: 10px;
`
const ArrowIcon = styled.i`
    @media (max-width: 759px) {
        font-size: 16px;
    }
`
const Image = styled.img`
    width: 85%;
`

function Slider({ project }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % project.images.slides.length)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? project.images.slides.length - 1 : currentSlide - 1)
    }
    const paging = `${currentSlide +1}/${project.images.slides.length}`

    return(
        <SliderBox>
            <Arrow onClick={prevSlide}>
                <ArrowIcon className="fa-solid fa-chevron-left fa-xl"></ArrowIcon>
            </Arrow>
            <Image src={project.images.slides[currentSlide]} alt="logement" />
            <Paging>{paging}</Paging>
            <Arrow onClick={nextSlide}>
                <ArrowIcon className="fa-solid fa-chevron-right fa-xl"></ArrowIcon>
            </Arrow>
        </SliderBox>
    )
}

export default Slider