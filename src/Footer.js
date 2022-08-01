import styled from "styled-components";
import React from 'react';
export default function Footer({ movie, section,viewfooter }){
    console.log(section, 'selected')
    console.log(movie,'movie')
    let sectioninfo;
    if (Object.keys(section).length === 0){
        sectioninfo=''

    } else{
        sectioninfo=''
        sectioninfo= `${section.day.weekday} - ${section.name}`
        }
if (viewfooter){
    return(
        <Foot>
            <img src={movie.posterURL} />
            <div>
            <p>{movie.title} </p>
            <p>{sectioninfo}</p>
            </div>
    
        </Foot>
    )
} else{
    return(<></>)
}
}

const Foot = styled.div`
    width: 100%;
    height: 100px;
    background-color: #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 20px;

    div{
        flex-direction: column;
        justify-content: left;
        align-items: center;
    }

    img {
        border: #fff solid 2px;
        width: 50px;
        margin: auto 15px;

    }
`