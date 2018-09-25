import React from 'react';

const Concept = ({concept, toggle, remove}) => {
    const done = (event) =>{
        event.preventDefault();
        toggle(concept);
        console.log("Props:", concept, toggle);
    }
    const erase = (event) => {
        event.preventDefault();
        remove(concept);
    }
    return(
        <li>
            {concept.done ? (<del>{concept.text}</del>) : (concept.text)} <a href="" onClick={done}>✓</a><a href="" onClick={erase}>x</a>
        </li>
    );
}

export default Concept;