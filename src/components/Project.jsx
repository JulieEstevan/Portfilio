import { useState } from 'react'
import styled from "styled-components"
import Modal from "./Modal"

const ProjectBox = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 20px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
    @media (max-width: 759px) {
        width: 75%;
    }
`
const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-bottom: solid 1px #e2e2e2;
    @media (max-width: 1249px) {
        height: 200px;
    };
    @media (max-width: 1059px) {
        height: 150px;
    }
`
const Title = styled.h3`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 1059px) {
        font-size: 18px;
    }
    @media (max-width: 759px) {
        font-size: 14px;
        margin: 10px;
    }
`

function Project({ id, project }) {
    const [modal, setModal] = useState(false)
    
    return(
        <ProjectBox id={id}>
            <Image src={project.images.preview} alt={project.name} onClick={() => setModal(true)} />
            <Title>{project.name}</Title>
            <Modal openModal={modal} closeModal={() => setModal(false)} project={project} />
        </ProjectBox>
        
    )
}

export default Project