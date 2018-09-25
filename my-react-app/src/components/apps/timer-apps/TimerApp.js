import React, { Component } from 'react';

export default class TimerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0}; //We set up our base state for this Component. That secondsElapsed is ALWAYS 0
    }
    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed +1 //We created a new function called tick(). which makes secondsElapsed = prevState +1
        }));
    }
    componentDidMount(){ //TimeApp begins Mount when you visit the page.
        this.interval = setInterval(() => this.tick(), 1000); //We are tracking every second this mounts. interval = setInterval(() returns Seconds Elapse.prevState every 1 sec)
        console.log(this.interval);
    }
    componentWillUnmount() {
        clearInterval(this.interval); //This will stop tracking time when we navigate away from the page.
        console.log(this.interval);
    }
    render() {
        return (
            <div>
                <h1 className="section-title">React Timer</h1>
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
            </div>
        );
    }
}