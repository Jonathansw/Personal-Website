import React, {Component} from 'react';
import {Grid, Col, Image} from 'react-bootstrap'

import Me from '../images/me.jpg';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="main-cont">
        <h1 className="text-center">About Me</h1>
        <hr/>
        <Grid>
          <Col xs={6} md={4}>
            <Image src={Me} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <h3>Hello there!</h3>
            <p>
              Here is some text
            </p>
          </Col>
          <Col xs={6} md={4}>
            <h3>Personal Intrests</h3>
            <p>
              Some more text here
            </p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;