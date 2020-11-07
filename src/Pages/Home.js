import React , { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container , CardDeck , Card , Button } from 'react-bootstrap'
import a from '../assets/bforest.jpg'
import b from '../assets/forest.jpg'
import c from '../assets/darck-forest.jpg'


export default class Home extends Component {
    render() {
        return (
           <>
           <CarouselBox />
           
           
           <Container className="text-center">
                <h2 className="text-center m-4">Snow Forest</h2>
                <CardDeck className="m-3">
                    <Card border="primary">
                        <Card.Img variant="top" src={a} />
                        <Card.Body>
                            <Card.Title>web dev blog</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet.</Card.Text>
                            <Button variant="primary">button</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Img variant="top" src={b} />
                        <Card.Body>
                            <Card.Title>web dev blog</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet.</Card.Text>
                            <Button variant="primary">button</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Img variant="top" src={c} />
                        <Card.Body>
                            <Card.Title>web dev blog</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet.</Card.Text>
                            <Button variant="primary">button</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
           </Container>
           
           </>
        )
    }
}