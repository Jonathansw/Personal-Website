import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div id="main-cont">
        <h1 className="text-center">Work Experience</h1>
        <hr/>
        <Grid>
          <Row className="row-cont">
            <Col md={4}>
              <h2>Thomson Reuters</h2>
              <h4>Junior software engineer</h4>
              <h4>March 2015 - Dec 2015</h4>
            </Col>
            <Col md={8}>
              <div>
                <ul>
                  <li>Built and automated the deployment of all the front-end components using Jenkins, cutting deployment time and the number of developers needed</li>
                  <li>Created different continuous environments using Jenkins for different departments within the company</li>
                  <li>Built new installation jobs using shell script and ant jobs</li>
                  <li>Worked with other programmers to enhance front end application using Javascript, JSP, XSL and Java</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="row-cont">
            <Col md={4}>
              <h2>PJM Interconnection</h2>
              <h4>Platforms Operations Co-op</h4>
              <h4>March 2014 - September 2014</h4>
            </Col>
            <Col md={8}>
              <div>
                <ul>
                  <li>Parsed and organized large data files using personal bash and awk scripts</li>
                  <li>Created real time updating charts and graphs using bash scripts and graphite</li>
                  <li>Gained knowledge and comprehension of the command line interface</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Experience;
