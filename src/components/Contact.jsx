import React from "react"
import styled from "styled-components"

const Section = styled.section`
    background-color: #f4f4f4;
    padding: 80px 100px 60px 100px;
    border-radius: 20px;
    @media (max-width: 1059px) {
        padding: 40px 60px;
    }
    @media (max-width: 599px) {
        padding: 20px 40px;
    }
    @media (max-width: 479px) {
        padding: 20px;
    }
`
const Title = styled.h2`
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
const Description = styled.p`
    font-size: 16px;
    opacity: 60%;
    @media (max-width: 1059px) {
        font-size: 12px;
    };
`
const Form = styled.form`
    margin: 50px 0 30px 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 38px;
    @media (max-width: 759px) {
        margin: 20px 0;
        gap: 20px;
    }
    @media (max-width: 599px) {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
    }
`
const IdBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
    @media (max-width: 599px) {
        gap: 10px;
        width: 100%
    }
`
const MsgBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    @media (max-width: 599px) {
        gap: 10px;
        width: 100%;
    }
`
const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    @media (max-width: 1059px) {
        font-size: 10px;
    };
`
const Input = styled.input`
    border: solid 1px #e4e4e4;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    padding: 12px 18px;
    &:focus {
        outline-color: rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 1059px) {
        font-size: 12px;
    };
`
const Message = styled.textarea`
    border: solid 1px #e4e4e4;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    padding: 12px 18px;
    min-height: 200px;
    max-height: 400px;
    max-width: 80%;
    min-width: 80%;
    &:focus {
        outline-color: rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 1059px) {
        font-size: 12px;
        min-height: 100px;
        max-height: 200px;
    };
    @media (max-width: 599px) {
        max-width: 100%;
    }
`
const Button = styled.button`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: white;
    background-color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 12px 25px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 1059px) {
        font-size: 10px;
    }
    @media (max-width: 599px) {
        width: 100%;
    }
`
const Result = styled.span`
    font-weight: 500;
`

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("Envoie....")
        const formData = new FormData(event.target)

        formData.append("access_key", "ff9223e2-4e01-4cff-98ce-bf28e100f9d8")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        if (data.success) {
            setResult("Votre message a été envoyé")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    return(
        <Section id="contact">
            <Title>Contact</Title>
            <Description>Questions, projets, offres d'emploi ? N'hésitez pas à me contacter !</Description>
            <Form onSubmit={onSubmit}>
                <IdBox>
                    <Label htmlFor="name">NOM</Label>
                    <Input type="text" name="name" id="name" required />
                </IdBox>
                <IdBox>
                    <Label htmlFor="email">EMAIL</Label>
                    <Input type="email" name="email" id="email" required />
                </IdBox>
                <MsgBox>
                    <Label htmlFor="message">MESSAGE</Label>
                    <Message name="message" id="message" placeholder="Ecrivez votre message" required />
                </MsgBox>
                <Button type="submit">ENVOYER</Button>
            </Form>
            <Result>{result}</Result>
        </Section>
    )
}

export default Contact