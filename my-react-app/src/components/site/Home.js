import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HomeWrapper = styled.div`
background-image: url("https://www.expenseanywhere.com/wp-content/uploads/2016/09/website-backgrounds-E280AB1E280AC-E280ABE280AC.jpg");
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper className="main">
                <div className="mainDiv">
                    <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
            
                    <p>
                        This app is intended to be a starter/tutorial app for your upcoming
                        project and a learning sandbox for you in months and years to come 
                        should you continue to develop software with React. In this 
                        application we will work through some of the basic React concepts,
                        build out some small applications, and then unleash you to build
                        your own applications.
                    </p>
                    <hr />
                    <h1>Important Notes</h1>
                    <ul>
                        <li>Being component based, you can move on to the next module.</li>
                        <li>
                            The styling is intentionally bland in some spots. Just a sandbox.
                        </li>
                        <li>At this phase, this site is not yet responsive.</li>
                        <li>
                            Refactor the text on this page and make this your own portfolio
                            project.
                        </li>
                        <li>
                            This app simply scratches the surface on what is possile with 
                            React.
                        </li>
                        <li>
                            We have tried to collect the very best resources for this app, and
                            we have cited those <Link to="/resources">here</Link>
                        </li>
                        <li>
                            <Link to="/resources">React Resources</Link>
                        </li>
                     </ul>
                </div>
            </HomeWrapper>
        );
    }
}