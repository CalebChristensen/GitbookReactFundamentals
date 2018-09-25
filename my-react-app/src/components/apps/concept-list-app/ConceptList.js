import React from 'react'; //Instead of putting all logic in one component. we can create a new component to handle displaying all the concepts.
import _ from 'lodash'; //Since we are passing it a whole bunch of concepts, we want to create a List component first.
import Concept from './Concept'; //We are passing the component props and dont need it to access any methods realting to state or anything. so this will be a FComponent.

const ConceptList = ({concepts, toggle, remove}) => { //this is where you do any calculations on the entire list. Then render each part individually through child compnent.
    let conceptsSorted = _.sortBy(concepts, 'done'); //by using lodash we can sort them by wheter or not the task is done. it references concepts.js
    let items = conceptsSorted.map( (concept) => 
    <Concept concept={concept} key={concept.text} toggle={toggle} remove={remove} /> 
    );

    return (
        <ul>
            {items}
        </ul>
    );

}
export default ConceptList;