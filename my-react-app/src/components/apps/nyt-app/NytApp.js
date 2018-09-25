import React, { Component } from 'react';
import NytResults from "./NytResults";
import styled from 'styled-components';
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '777d5651dd3a4960b5757dc0091cd740';

const NytWrapper = styled.div`
background-image: url("http://yodobi.com/4k-Wallpapers/black-wallpapers-images-Is-4K-Wallpaper.jpg");
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const ArticleSpan = styled.span`
    color: white;
`

export default class NytApp extends Component { //A constructor builds the Component that we can work through.
    constructor(props) { //We don't need props in this instance because it's never mentioned again on this page.
        super(props);
        this.state = { //creating our key values for the API
            search: '', 
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }
        handleChange = (event) => {  //handleChange means we are grabbing a hold of the event. which references the start / end / submit.
            this.setState({ //we are changing the state to.
                [event.target.name]: event.target.value, //event.target is the input that is being used. we are making the name(start / end / search) = the value
            }); //the only reason we use name is because it was stated in our render below.
        }
        handleSubmit = (event) => { //event is being created as the argument
            this.fetchResults() //
            event.preventDefault() //this keeps the page from refreshing from the moment we hit the submit button. We will not see results unless this is here
        }
        fetchResults = () => {
            let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}` //constant and stored at the top of the file. &q = queary.
            url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url //if there is a start date then append to the URL.
            url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url //if there is a end date then append to the URL.
            fetch(url) //get the URL
                .then(
                    (response) => response.json() //Jasonify the results by making them an object
                ).then((data) => { //when the results come back we choose to call it data.
                    this.setState({ results: data.response.docs }) //setState is now data.response(key).docs(value) Basically moving through JSON.
                })  
        }
        changePageNumber = (e, direction) => {
            e.preventDefault()
            if (direction === 'down') {
                if (this.state.pageNumber > 0) {
                    let newPageNumber = this.state.pageNumber - 1
                    this.setState({ pageNumber: newPageNumber })
                    this.fetchResults();
                }
            }
            if (direction === 'up') {
                let newPageNumber = this.state.pageNumber +1
                this.setState({ pageNumber: newPageNumber })
                this.fetchResults();
            }
        }
    
    render(){ //JSX is at the bottom. JSX is html in a react program. {curley braces let you throw in javascript}
        return(
            <NytWrapper className="main">
                <div className="mainDiv">
                    <form onSubmit={e => this.handleSubmit(e)}> 
                        <center>
                        <ArticleSpan>Enter a Single search term (required): </ArticleSpan><br /><br />
                        <input type="text" name="search" onChange={this.handleChange} required /> <br /><br />
                        <ArticleSpan>Enter a start date: </ArticleSpan><br />
                        <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /> <br />
                        <ArticleSpan>Enter an end date: </ArticleSpan><br />
                        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /> <br /><br /> 
                        <button className="submit">Submit search</button>
                        </center>
                    </form>
                    {
                        this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
                    }
                </div>
            </NytWrapper>
        );
    }
}