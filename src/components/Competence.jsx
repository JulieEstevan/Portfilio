import styled from "styled-components"

const CompetenceBox = styled.div`
    width: 12rem;
    height: 12rem;
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1249px) {
        width: 9rem;
        height: 9rem;
    };
    @media (max-width: 1059px) {
        width: 7rem;
        height: 7rem;
    };
    @media (max-width: 599px) {
        width: 40%;
        height: auto;
        border-radius: 20px;
        padding-top: 10px;
    }
`
const Icon = styled.i`
    @media (max-width: 1249px) {
        font-size: 24px;
    };
    @media (max-width: 1059px) {
        font-size: 20px;
    };
`
const Text = styled.p`
    font-size: 16px;
    opacity: 80%;
    text-align: center;
    padding: 10px;
    @media (max-width: 1249px) {
        font-size: 13px;
    };
    @media (max-width: 1059px) {
        font-size: 10px;
    };
    @media (max-width: 599px) {
        padding-top: 5px;
    }
`

function Competence({ icon, text }) {
    return(
        <CompetenceBox>
            <Icon className={icon}></Icon>
            <Text>{text}</Text>
        </CompetenceBox>
    )
}

export default Competence