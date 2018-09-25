import React from 'react';
import styled from 'styled-components';

const MovieList = styled.ul`
    list-style-type: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
`
const MovieItem = styled.li`
    background-color: black;
    padding: 5px;
    margin: 5px;
`
const MovieText = styled.p`
    color: white;
`
const FormResults = ({results}) => {
    const link = 'https://image.tmdb.org/t/p/w300';
    const resultsFormatted = results.map((element) =>
        <MovieItem key={element.id}>
            <img src={element.poster_path === null ? 
            'http://via.placeholder.com/300x300' : `${link}${element.poster_path}`} alt={`${element.title} poster`} className="resultPoster" />
            <div>
                <MovieText>{element.title}</MovieText>
                <MovieText>{element.release_date}</MovieText>
            </div>
        </MovieItem>
    );        
    return (
        <MovieList id="results">
            {resultsFormatted}
        </MovieList>
    );
}
export default FormResults;