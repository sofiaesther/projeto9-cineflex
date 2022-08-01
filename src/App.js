import Top from './Top.js';
import ChooseMovie from './ChooseMovie.js';
import Section from './Section.js';
import Seats from './Seats.js';
import Footer from './Footer.js';
import Sucess from './Sucess.js';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [section, setSection] = useState({});
    const [viewfooter, setViewfooter] = useState(false);
    const [selectedseats, setSelectedSeats] = useState([]);
    const [form, setForm] = React.useState({
        name: '',
        cpf: '',
    
      });
    return(
        <BrowserRouter>
                <Body>
                    <Top />
                    <Routes>
                        <Route path="/" element={<ChooseMovie movies={movies} setMovies={setMovies} viewfooter={viewfooter} setViewfooter={setViewfooter} />} />
                        <Route path="/sessoes/:idMovie" element={<Section movie={movie} setMovie={setMovie}/>} />
                        <Route path="/assentos/:idSection" element={<Seats section={section} setSection={setSection} form={form} setForm={setForm} viewfooter={viewfooter} setViewfooter={setViewfooter} selectedseats={selectedseats} setSelectedSeats={setSelectedSeats}/>} />
                        <Route path='/sucesso' element={<Sucess section={section} form={form} selectedseats={selectedseats} />} />
                    </Routes>
                    {viewfooter?(<Footer movie={movie} section={section} viewfooter={viewfooter}/>):<></>}
                </Body>
        </BrowserRouter>
        
    )
}

const Body = styled.div`
    font-family: sans-serif;
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    justify-content: center;

    Link { text-decoration: none; }
`
