import React, { Component } from 'react';
import { Form } from './Form';
import styled from 'styled-components';

const MovieWrapper = styled.div`
background-image: url("https://media.npr.org/assets/img/2014/09/28/4dx_interior_img02_wide-c89a3d8756fae045234d9e7bc0a17258b43cdbcb.jpg?s=1400");
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default class MovieApp extends Component {
    render() {
        return(
            <MovieWrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </MovieWrapper>
        );
    }
}