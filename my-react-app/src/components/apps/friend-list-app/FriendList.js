import React, { Component } from 'react';
import axios from 'axios';
import FaTrashO from 'react-icons/lib/fa/trash-o'

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendList extends Component {

    constructor(props) {
        super(props)
        this.state = { friends: [] };
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.setState({ friends: nextProps.props })
        //console.log(this.state);
    }
    renderFriends() {
        if (this.state.friends) {
            return this.state.friends.map(friend =>
                <div key={friend.id}>
                    <li className="list-group-item">
                        <strong>Name:</strong> {friend.name}
                        <br />
                        <strong>Age:</strong> {friend.age}
                        <button onCLick={() => { this.removeFriend(this, friend) }}
                            className="btn btn-danger trash">
                            <span className="glyphicon glyhicon-trash"><FaTrashO /></span>
                        </button>
                    </li>
                </div>
            );      
        } else {
            //Need to show that we haven't received any data.
            //Either there are no friends coming in from the request
            //Something went wrong on the network.
            return(
                <div>
                    <h1>Waiting for friends</h1> 
                    {this.state} 
                </div> //If we don't have friend in the array, we'll show a "waiting for friends" message.
            );
        }
    }
    removeFriend(event, friend) {
        var id = friend.id;
        var tempFriends = this.state.friends;
        axios.delete(`${API_BASE}/${id}`)
        .then( response => {
            var deleteFriend = tempFriends.indexOf(friend);
            tempFriends.splice(deleteFriend, 1);
            this.setState({ friends: tempFriends });
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-6">
                        <h3>List of Friends</h3>
                        <ul className="list-group friends">
                            {this.renderFriends()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default FriendList;