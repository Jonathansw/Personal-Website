import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './Skill.css';

class Skill extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Skills</h1>
        <hr/>
        <Grid>
          <Row>
            <Col md={4}>
              <div className="text-center skills">
                <h2>Languages</h2>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center skills">
                <h2>Frameworks</h2>
                <ul>
                <li>Node</li>
                <li>Vue</li>
                <li>Angular2</li>
                <li>React</li>
                <li>Karma/Mocha</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center skills">
                <h2>Tools</h2>
                <ul>
                  <li>Jenkins</li>
                  <li>TravisCI</li>
                  <li>Git/Github</li>
                  <li>Postman</li>
                </ul>
              </div>
            </Col>            
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Skill;
