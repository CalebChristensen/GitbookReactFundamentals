import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './FriendList'

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendListApp extends Component {
    constructor(props) {
        super(props);
        this.state = { friends: [] }
        axios.get(API_BASE)
            .then( response => {
                this.setState({ friends: response.data });
                this.renderFriendsList(this.state.friends);
            });
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) { //handleSubmit is not a react method. It's not a life cycle method or any other built in method in React API.
        event.preventDefault(); //so we can see thee results of our submit log.
        console.log("Button pressed."); 
        var name = this.refs.name.value; //name will be friends.name.what is typed
        var age = this.refs.age.value; //age will be friends.age.what is typed
        console.log("Name:", name);
        console.log("Age:", age);

        var friendsTemp = this.state.friends; // friends
        console.log(friendsTemp); //We added a onSubmit link on line 28's Form to activate the link for the console.logs
    
        axios.post(API_BASE, { name, age}) //Base URL = name and age from handleSubmit. Post is like push for axios.
            .then(response => {
                friendsTemp.push(response.data); //pushing a line deeper into the data
                this.setState({ friends: friendsTemp });
                this.renderFriendsList(this.state.friends);
                this.refs.name.value = ""; //refs are put in here so when we submit. The form wipes the inputs blank.
                this.refs.age.value = "";
                console.log(response); //console logs the data.
            });
        }
            renderFriendsList() {
                //console.log(this.state.friends);
                return <FriendList props={ this.state.friends } />
            }
        
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <div className="col-xs-4">
                        <form onSubmit={this.handleSubmit.bind(this)}> 
                            <h3>Enter a Friend!</h3>
                            <fieldset className="form-group">
                                <label>Friend's Name:</label>
                                <input type="text" ref="name" name="name" className="form-control" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Friend's Age:</label>
                                <input type="text" ref="age" name="age" className="form-control" />
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save Friend</button>
                        </form>
                    </div>
                    <div>
                        {this.renderFriendsList(this.state.friends)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendListApp