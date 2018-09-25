import React, { Component } from 'react';
import _ from 'lodash'; //lodash is a JavaScript library which provides utility functions for common tasks.
import ConceptList from './ConceptList';
import { concepts } from './concepts'; //This import is for adding the pre built words that will be implemented into our list
import NewConcept from './NewConcept';

export default class ReactConceptsApp extends Component {
    constructor() {
        super();
        this.state = { concepts: concepts }; //This.state === the list we created in ./concepts.
        console.log(this.state.concepts);
    }
    toggleConcept = (concepts) => {
        let concept = _.find(this.state.concepts, concepts);
        concept.done = !concept.done;
        this.setState({concepts: this.state.concepts});
    }
    createConcept = (text) => {
        this.state.concepts.push({
            text,
            done: false
        });
        this.setState({concepts: this.state.concepts})
    }
    removeConcept = (text) => {
        console.log(text)
        let list = this.state.concepts
        let newList = list.filter(erase => erase !== text)
        this.setState({concepts: newList})
    }
    
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand.
                        Note that this will update when you refresh the page.
                    </p>
                    <NewConcept createConcept={this.createConcept.bind(this)} />
                    <h2>General Concepts</h2>
                    <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept} remove={this.removeConcept} />
                </div>
            </div>
        );
    }
}