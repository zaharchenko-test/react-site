import React , { Component } from 'react'
import { Container , Tab , Row , Col , Nav } from 'react-bootstrap'
import a from './img/a.jpg'
import b from './img/b.jpeg'
import c from './img/c.jpeg'
import d from './img/d.jpg'
import e from './img/e.jpg'

export default class About extends Component {
    
    render() {
        let area = document.getElementById('area')
        
        
        console.log(area)
        
        
        
        return (
           <Container className="mt-5">
               <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> design </Nav.Link>
                                    <Nav.Link eventKey="second"> team </Nav.Link>
                                    <Nav.Link eventKey="third"> programing </Nav.Link>
                                    <Nav.Link eventKey="fourth"> frameworcks </Nav.Link>
                                    <Nav.Link eventKey="fifth"> library </Nav.Link>
                                    <Nav.Link eventKey="sixth"> testing </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src={c} alt="text" className="w-100" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat labore ratione ab perspiciatis doloribus hic aspernatur tenetur. Natus iure magnam dolor necessitatibus magni, maiores.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={d} alt="text" className="w-100" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat labore ratione ab perspiciatis doloribus hic aspernatur tenetur. Natus iure magnam dolor necessitatibus magni, maiores.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={e} alt="text" className="w-100" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat labore ratione ab perspiciatis doloribus hic aspernatur tenetur. Natus iure magnam dolor necessitatibus magni, maiores.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={b} alt="text" className="w-100" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat labore ratione ab perspiciatis doloribus hic aspernatur tenetur. Natus iure magnam dolor necessitatibus magni, maiores.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={a} alt="text" className="w-100" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat labore ratione ab perspiciatis doloribus hic aspernatur tenetur. Natus iure magnam dolor necessitatibus magni, maiores.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <div style={{padding:'30px'}} />
                                    
                                    <textarea id="area" style={{display:'block',width:'99%',margin:'1px',padding:'9px',height:'400px',border:'1px solid red',borderRadius:'4px'}}  />
                                    
                                    
                                    
                                    
                                    
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        )
    }
}