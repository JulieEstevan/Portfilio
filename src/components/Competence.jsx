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
`
const Icon = styled.i`

`
const Text = styled.p`
    font-size: 16px;
    opacity: 80%;
    text-align: center;
    padding: 10px;
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