import React from 'react';
import styled from 'styled-components';

const ArticleList = styled.ul`
    list-style-type: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    
`
const ArticleButton = styled.button`
    text-line: center;
`
const ArticleP = styled.p`
    color: white;
`
const ArticleH2 = styled.h2`
    color: white;
`
const ArticleLi = styled.li`
    color: white;
`

const NytResults = (props) => {
    return (
        <div>
            <center> 
            {props.results.map(result => { //All of our results will be mapped and returned.
                return ( //Key has to be used because we stated .map _id was from the JSON Ny Times Results. Thats why we reference it.
                    <div key={result._id}> 
                    <ArticleH2>{result.headline.main}</ArticleH2>
                    {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                    <ArticleP>
                        {result.snippet}
                        <br />
                        {result.keywords.length > 0 ? ' Keywords: ' : ''}
                    </ArticleP>
                    <ArticleList> 
                        {result.keywords.map(keyword => <ArticleLi key={keyword.value}>{keyword.value}</ArticleLi>)} 
                    </ArticleList>
                    <a href={result.web_url}><ArticleButton>Read It</ArticleButton></a>
                </div>
                )
            })}
            <div>
                <ArticleButton onClick={e => props.changePage(e, 'down')}>Previous 10</ArticleButton>
                <ArticleButton onClick={e => props.changePage(e, 'up')}>Next 10</ArticleButton>
            </div>
            </center>
        </div>
    )
}
export default NytResults
//results.keywords.map Keywords is any word you want to call it. We just call it keywords.