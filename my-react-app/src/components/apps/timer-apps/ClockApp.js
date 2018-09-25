import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString(); //let date === our getTimeString function.
        this.state = { // Our state === time.
            time: date //time will be our reference point since date = getTimeString() and time = date.
        }
    }
        getTimeString() {
            const date = new Date(Date.now()).toLocaleTimeString(); //we are changing date to equal our new toLocaleTimeString()
            return date;
        }
        componentDidMount() {
            const _this = this; //we set _this to === this due to JS Scope. This is global while _this is now local.
            this.timer = setInterval(function () { //this (global).timer(new stop point) === setInterval (meaning it will create a counter)
                var date = _this.getTimeString(); //let date(global) === _this(local) our getTimeString Function.
                _this.setState({ //_this(local) will change the setState of time: date to 1000 or 1 second intervals.
                    time: date
                })
            }, 1000)
        }

        componentWillUnmount(){ //when we navigate away from the page it will unmount and stop keeping track.
            clearInterval(this.timer); //this references our local scope in componentDidMount. because this.timer === setInterval
        }
    
    render() {
        return (
            <div>
                <h1 className="section-title">React Clock</h1>
                <hr className="explanation" />
                <p>{this.state.time}</p>
            </div>
        );
    }
}