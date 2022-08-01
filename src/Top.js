import React from 'react';
import styled from 'styled-components';

export default function Top(){
    return(
        <Container>
            <p>CINEFLEX</p>
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
	height: 70px;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
	background: #C3CFD9;

	p {
        margin: auto;
        font-size: 28px;
		color: #E8833A;
	}
`;