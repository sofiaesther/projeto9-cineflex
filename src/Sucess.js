import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Sucess({ section, form, selectedseats }){
    
    const information=[
        {title:"Filme e sessão",
        description:[section.movie.title,
                     `${section.day.date} ${section.name}`]},
        {title:"Ingressos",
        description: [selectedseats.map(s=><p>Assento {s.name}
        </p>) ]},
        {title:"Comprador",
        description:[`Nome:${form.name}`,
                    `CPF: ${form.cpf}`]},
    ];

    return(
        <>
        <Title>Pedido feito com sucesso!</Title>
        {information.map((i)=>
        <Item>
            <Topic>{i.title}</Topic>
            {(i.description.map((d)=> <p>{d}</p>))}
        </Item>)}
        <Button><Link to ={`/`} >Voltar pra Home</Link></Button>
        </>
    )
}

const Title=styled.div`
    margin: 100px auto auto auto;
    color: #247A6B;
    font-size: 22px;
    font-weight: 800;
    width: 150px;
    display: flex;
    text-align: center;

`
const Topic=styled.div`
    font-weight: 800;
    font-size: 18px;
`
const Item = styled.div`
width: 330px;
margin: 15px auto;
`
const Button =styled.div`
    width: 225px;
    height: 45px;
    margin: 30px auto auto auto;
    background-color: #E8833A;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a { text-decoration: none; 
            color:#fff;}
`
