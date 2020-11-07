import React , { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/forest.jpg'
import dforestImg from '../assets/darck-forest.jpg'
import bforestImg from '../assets/bforest.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
           
           <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={forestImg} alt="alt text" />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>lorem insum dolor set amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={dforestImg} alt="alt text" />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>lorem insum dolor set amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bforestImg} alt="alt text" />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>lorem insum dolor set amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
           </Carousel>
           
        )
    }
}