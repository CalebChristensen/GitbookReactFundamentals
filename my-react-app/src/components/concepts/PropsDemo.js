import React, { Component } from 'react';
import propTypes from 'prop-types';

export const Projects = [
    { title: 'Beast Creature', author: 'Adam Smith', codependUrl: 'https://codepen.io/Adamws33/pen/KZQxwj', date: '01/15/2018' },
    { title: 'Another Beast', author: 'Allison Summers', codependUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
    { title: 'Beast Mode', author: 'Andres Martin', codependUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
    { title: 'Beasty', author: 'Andrew Gunst', codependUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
]

export default class PropsDemo extends Component {
    constructor(props) {
        super(props)
        console.log("PropsDemo class:", props);
        this.state = { projects: Projects };
        console.log("State check:", this.state.projects);
    }
    render() {
        const works = this.state.projects.map((project,i) => {
            console.log("Project", project)
            console.log("index", i)
            return (
                <div key={i}>
                    <Title title={project.title} />
                    <Author author={project.author} />
                    <CodepenUrl codepenUrl={project.codependUrl} />
                    <Footer date={project.date} />
                    <hr />
                </div>
            );
        })
        
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>List of Projects</h1>
                    <div>
                        {works}
                    </div>   
                </div>
            </div>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props)
        console.log("Title props:", props);
    }
    render() {
        return (
            <p> {this.props.title} </p>
        );
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props)
        console.log("Author props:", props);
    }
    render() {
        return (
            <p> {this.props.author} </p>

        );
    }
}

class CodepenUrl extends React.Component {
    constructor(props) {
        super(props)
        console.log("CodepenUrl props", props);
    }
    render() {
        return (
            <p> {this.props.codepenUrl} </p>
        );
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
        console.log("Footer props", props);
    }
    render() {
        return (
            <p> {this.props.date} </p>
        );
    }
}

PropsDemo.propTypes = {
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    codepenUrl: propTypes.string.isRequired,
    date: propTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Generic Creature project',
    author: 'EFA Student',
    codepenUrl: 'www.codepen.com',
    date: '01/01/2018'
}