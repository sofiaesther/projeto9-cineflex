import styled from "styled-components";
import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";

export default function ChooseMovie({ movies, setMovies, viewfooter, setViewfooter }){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
    
        promisse.then(m => {
		    setMovies(m.data);
	            });

    return(
        <>
            <Title>Selecione o filme</Title>
            <MoviesBox>
			    {movies&&movies.map(m=> 
                    <Movie key={m.id}>
                        <Link to={`/sessoes/${m.id}`} onClick={()=>setViewfooter(!viewfooter)}>
                            <img src={m.posterURL} alt={m.title}/>
                        </Link>
                    </Movie>)}
		    </MoviesBox>
        </>
    );
}

const Title = styled.div`
    width: 100%;
    height: 60px;
    margin: 80px auto 0 auto;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MoviesBox = styled.div`
    width: 330px;
    margin: 0px auto 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Movie = styled.div`
width: 150px;
height: 216px;
background-color: #ffffff;
box-shadow: 0px 0px  5px 1px gray;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
margin-top: 20px;

:hover {
  background-color: coral;
}

img{
    margin: auto;
    width:140px;
    height: 200px;
}
`