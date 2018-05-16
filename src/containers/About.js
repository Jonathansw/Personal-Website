import React, {Component} from 'react';
import {Grid, Col, Image} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';

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
          <Col md={8} className="self-desc">
            <h3>Hello there!</h3>
            <p>
              I'm an aspiring software developer currently located in the Bay Area.  
              I received my bachelor in computer science from Drexel University in May 2017.  
              My current goals are to be able to create lasting and impactful software.
            </p>
            <p>
              When I am not coding or learning new technologies, I enjoy spending my time watching/playing my favorite eSport.  
              Outside of using my computer I really enjoy reading foreign novels and cooking.
            </p>
            <p>I am always open to meet new people and learn about different experiences in the field.</p>
            <p>
              Get in touch with me{' '}
              <FontAwesome name="hand-o-right"/> {' '}
              <a href="mailto:jonathansw@outlook.com" target="_blank" rel="noopener noreferrer">jonathansw@outlook.com</a>
            </p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;