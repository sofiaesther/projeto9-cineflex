import InfoForm from "./InfoForm.js";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from 'react';
import styled from "styled-components";

export default function Seats( {section, setSection, form, setForm,viewfooter, setViewfooter, selectedseats, setSelectedSeats} ){
    const params = useParams();
    const [seats, setSeats] = useState([]);

    function seatColor(available,selected){
        if (selected){
            return ('#8DD7CF')
        } else if (available){
            return('#C3CFD9')
        } else{
            return ('#F7C52B')
        }
    }

    function seatselection(seat){
        if(!seat.selected){
            seat.selected=!seat.selected
            setSelectedSeats([...selectedseats, {id: seat.id, name:seat.name}])
        }else if(seat.isAvailable){
            seat.selected=!seat.selected
            setSelectedSeats(()=> selectedseats.filter((s) => s.id !== seat.id))
        } else{
            alert("Esse assento não está disponível");
        }
    }
    console.log(selectedseats)
    function sendRequest(section,form, selected){
        setViewfooter(!viewfooter);
        const send ={
            ids: selected.map(s=>s.id),
            name: form.name,
            cpf: form.cpf
        }
        const promisse = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",send);
        promisse.then(p=>{
            console.log('aprovado')
        })
    }

    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSection}/seats`);
        promisse.then(s=>{
            setSection(s.data);
            setSeats(s.data.seats.map(sd=> {return {...sd, selected:false}}));
        });
    }, []);


    return(
        <>
        <Title>Selecione o(s) assento(s)</Title>
        <AllSeats>
            {seats.map(s=>
                <SeatBox background={()=>seatColor(s.isAvailable, s.selected)} margin ={'5px 3px'} onClick={()=>seatselection(s)}> {s.name} </SeatBox>)}
        </AllSeats>
        <Legend>
            <div>
                <SeatBox background={()=>seatColor(true,true)} margin ={'15px auto 5px auto'} > </SeatBox>
                Selecionado
            </div>
            <div>
                <SeatBox background={()=>seatColor(true,false)} margin ={'15px auto 5px auto'} > </SeatBox>
                Disponível
            </div>
            <div>
                <SeatBox background={()=>seatColor(false,false)} margin ={'15px auto 5px auto'} > </SeatBox>
                Indisponível
            </div>
        </Legend>
        <InfoForm form={form} setForm={setForm}/>
        <Button onClick={()=>sendRequest(section,form, selectedseats)}><Link to ={`/sucesso`} >Reservar assento(s)</Link></Button>
        </>
    )
}
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
const Title = styled.div`
    width: 100%;
    height: 60px;
    margin: 80px auto 0 auto;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Legend = styled.div`
    display: flex;
    width: 300px;
    margin: 10px auto;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
`
const AllSeats =styled.div`
    width: 330px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;

`
const SeatBox =styled.div`
    margin: ${(props) => props.margin};;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background:${(props) => props.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: smaller;
`