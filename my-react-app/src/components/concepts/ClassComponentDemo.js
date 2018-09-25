import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import styled from 'styled-components';

const ClassComponentsWrapper = styled.div`
background-image: url("https://imgix.bustle.com/rehost/2016/9/13/041fd131-9e31-4965-8b47-3cd5da65b84a.png");

background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { likeCount: 0, dislikeCount: 0 };
    }

    likeCount = () => {
        this.setState(
            { likeCount: this.state.likeCount +1 }
        );
    };

    dislikeCount = () => {
        this.setState(
            { dislikeCount: this.state.dislikeCount -1 }
        );
    };

    render() {
        console.log("render called");
        return (
        <div className="main">
            <div className="mainDiv">
                <ClassComponentNotes />
                <hr />
                <ClassComponentsWrapper>
                <h1>Like it!!!</h1>
                <h4>
                    <button onClick={this.likeCount}>
                        <FaThumbsUp />
                        {this.state.likeCount }
                     </button>
                </h4>
                <h1>Disike it!!!</h1>
                <h4>
                    <button onClick={this.dislikeCount}>
                        <FaThumbsDown />
                        {this.state.dislikeCount }
                    </button>
                </h4>
                </ClassComponentsWrapper>
            </div>
        </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component</dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};