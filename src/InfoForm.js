import React from 'react';
import styled from "styled-components";

export default function InfoForm( {form, setForm} ){
    function handleForm (e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        }) 
      }
      console.log(form)
    return(
        
        <form>
            <Form>
            <label value='Seu nome'>Nome do comprador:</label>
	        <input name="name" type="text" onChange={handleForm} placeholder="Digite seu nome..." required></input>
            <label value='Seu nome'>CPF do comprador:</label>
            <input name="cpf" type="text"  onChange={handleForm} minLength={11} maxLength={11} placeholder="Seu CPF, apenas números"required></input>
            </Form>
        </form>
    )
}
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    margin: 20px auto auto auto;

    input{
        margin-top: 10px;
        margin-bottom: 20px;
        width: 100%;
        height: 50px;
        border: gray 1px solid;
        border-radius: 2px;

        ::placeholder{
            margin-left: 20px;
            font-style: italic;
            font-weight: lighter;
            color: gray;
        }
    }
`


