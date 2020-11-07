import React , { Component } from 'react'
import logo from '../Components/favicon.ico'
import { Media , Col , Row , Container , Card , ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
           <Container className="mt-5">
                <Row>
                    <Col md="9">
                        <Media className=""m-5>
                            <img width={100} height={100} src={logo} className="mr-3" alt="alt text" />
                            <Media.Body>
                                <h5>blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Media.Body>
                        </Media>
                        <Media className=""m-5>
                            <img width={100} height={100} src={logo} className="mr-3" alt="alt text" />
                            <Media.Body>
                                <h5>blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Media.Body>
                        </Media>
                        <Media className=""m-5>
                            <img width={100} height={100} src={logo} className="mr-3" alt="alt text" />
                            <Media.Body>
                                <h5>blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Media.Body>
                        </Media>
                        <Media className=""m-5>
                            <img width={100} height={100} src={logo} className="mr-3" alt="alt text" />
                            <Media.Body>
                                <h5>blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3" className="text-center mt-3">
                        <h5>categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>html/css</ListGroup.Item>
                                <ListGroup.Item>javascript</ListGroup.Item>
                                <ListGroup.Item>python</ListGroup.Item>
                                <ListGroup.Item>php/mysql</ListGroup.Item>
                                <ListGroup.Item>react/node</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>site widget</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing</Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
           </Container>
        )
    }
}