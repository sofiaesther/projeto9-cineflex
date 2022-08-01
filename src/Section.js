import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React from 'react';
import styled from "styled-components";

export default function Section({ movie, setMovie }){
    const params = useParams();
    const [movieday, setMovieday] = useState([]);

    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idMovie}/showtimes`);
        promisse.then(m=>{
            setMovie(m.data);
            setMovieday(m.data.days);
        });
    }, []);



    return(
        <>
        <Title> Selecione o horário</Title>
        <Content>
        {movie&&movieday.map((m)=> 
            <Sections key={m.id}>
                <h1>{m.weekday} - {m.date}</h1>
                <SectionTime>
                    {m.showtimes.map(s=>
                        <SectionTimeBox key={s.id}>
                            <Link to ={`/assentos/${s.id}`} >
                            {s.name}
                            </Link>
                        </SectionTimeBox>)}
                </SectionTime>
            </Sections>
        )};
        </Content>
        </>
    );
}

const Content = styled.div`
margin-bottom:80px;
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
const Sections = styled.div`
    width: 330px;
    height: 100px;
    margin: 0px auto 20px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 10px;
h1 {
    text-align: left;
    font-weight: lighter;
    margin-right: auto;
}
`
const SectionTime = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: left;
`
const SectionTimeBox = styled.div`
    width: 85px;
    height: 45px;
    margin: auto 10px auto 0;
    border-radius: 5px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    color:#fff;

    a { text-decoration: none; 
            color:#fff;}

    :hover {
        background-color: yellow;
    }
`