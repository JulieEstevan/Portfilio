import { useEffect, useRef } from "react";
import styled from "styled-components"
import Slider from "./Slider"

const Dialog = styled.dialog`
    cursor: default;
    width: 70%;
    padding: 20px 50px;
    border-radius: 25px;
    border: solid 2px #e2e2e2;
`
const Button = styled.button`
cursor: pointer;
    position: relative;
    left: 100%;
    border: none;
    background: inherit
`
const Title = styled.h3`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0 30px 0;
    @media (max-width: 759px) {
        font-size: 26px;
    }
    @media (max-width: 599px) {
        font-size: 20px;
    }
`
const Text = styled.p`
    margin: 10px 50px;
    font-size: 18px;
    @media (max-width: 759px) {
        margin: 10px;
        font-size: 16px;
    }
    @media (max-width: 599px) {
        font-size: 14px;
    }
`
const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 30px 0 10px 0;
    @media (max-width: 759px) {
        gap: 30px;
        margin: 20px 0 0px 0;
    }
`
const Link = styled.a`
    cursor: pointer;
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 759px) {
        font-size: 14px;
    }
`

function Modal({ openModal, closeModal, project }) {
    const ref = useRef()

    useEffect(() => {
        if (openModal) {
        ref.current?.showModal()
        } else {
        ref.current?.close()
        }
    }, [openModal])

    return(
        <Dialog ref={ref} onCancel={closeModal}>
            <Button onClick={closeModal}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
            </Button>
            <Title>{project.name}</Title>
            <Slider project={project}/>
            <Text>Date du projet : {project.date}</Text>
            <Text>Objectif : {project.description}</Text>
            <LinkBox>
                <Link href={project.urls.website} target="_blank">Site web</Link>
                <Link href={project.urls.github} target="_blank">Github</Link>
            </LinkBox>
            
        </Dialog>
    )
}

export default Modal