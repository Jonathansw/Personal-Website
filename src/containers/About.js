import React, {Component} from 'react';
import {Grid, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap'

import Me from '../images/me.jpg';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="main-cont">
        <h1 className="text-center">About Me</h1>
        <hr/>
        <Grid>
          <Col md={4}>
            <Image src={Me} thumbnail />
          </Col>
          <Col md={4}>
            <h3>Hello there!</h3>
            <p>
              I'm an inspiring software developer currently located in the Bay Area.  
              I received my bachelor degree in computer science from Drexel University in May 2017.  
              My current aspirations are to be able to create lasting impactful software.
            </p>
            <p>
              When I am not coding or learning new technologies, I enjoy spending my time watching/playing my favorite eSport.  
              Outside of using my computer I really enjoy reading and hanging out with my cats.
            </p>
          </Col>
          <Col md={4}>
            <h3>My current tech stack</h3>
            <p>
              <ListGroup>
                <ListGroupItem>
                  <h4>Languages</h4>
                  <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <h4>Frameworks</h4>
                  <ul>
                    <li>NodeJS</li>
                    <li>VueJS</li>
                    <li>ReactJS</li>
                  </ul>
                </ListGroupItem>
              </ListGroup>
            </p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;