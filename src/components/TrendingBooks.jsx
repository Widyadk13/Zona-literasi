import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol
} from 'mdbreact';
import { Container } from 'reactstrap';

const TrendingBooks = (props) => {
    return (
        <Container>
                <MDBCard>
                    <MDBCardImage className='img-fluid' src={props.src} waves />
                    <MDBCardBody>
                        <MDBCardTitle>
                            {props.Title}
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
        </Container>
    )
}

export default TrendingBooks;