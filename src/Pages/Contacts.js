import React , { Component } from 'react'
import { Form , Button , Container } from 'react-bootstrap'


export default class Contacts extends Component {
    render() {
        return (
           <>
           <Container className="text-center mt-5">
                <h1>contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>email adress</Form.Label>
                        <Form.Control type="email" placeholder="you email"/>
                        <Form.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                        
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicCheckbox">
    
                        <Form.Check type="checkbox" label="check me" custom/>
                        
                    </Form.Group>
                    <Button variant="primary" type="submit">submit</Button>
                </Form>
           </Container>
           </>
        )
    }
}