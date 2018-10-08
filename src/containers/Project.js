import React, {Component} from 'react';
import {Grid, Col, Row, Label} from 'react-bootstrap';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <div id="main-cont">
        <h1 className="text-center">Projects</h1>
        <hr/>
        <Grid>
          <Row className="row-cont">
            <Col md={4}>
              <h2><a href="https://github.com/Jonathansw/CosmosCloud_SD" target="_blank" rel="noopener noreferrer">Smart Home System</a></h2>
              <div>
                <Label bsStyle="info">Angular2</Label>{' '}
                <Label bsStyle="info">Node.JS</Label>{' '}
                <Label bsStyle="info">MongoDB</Label>{' '}
                <Label bsStyle="info">Express</Label>{' '}
                <Label bsStyle="info">Python</Label>{' '}
                <Label bsStyle="info">MochaJS/Karma</Label>
              </div>
            </Col>
            <Col md={8}>
              <div className="projects">
                <ul>
                  <li>Worked with four other developers to create a smart home system using Raspberry Pies and MEAN stack</li>
                  <li>Spearheaded all technical writing, including system, design, and testing documents</li>
                  <li>Setup guidelines and developed tests for web components using Karma and MochaJS</li>
                  <li>Designed and implemented major portions of the web component with Angular2 that communicated to Raspberry Pies</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="row-cont">
            <Col md={4}>
              <h2><a href="https://github.com/Jonathansw/MTGPrices" target="_blank" rel="noopener noreferrer">MTG Deck Price Checker</a></h2>
              <div>
                <Label bsStyle="info">MeteorJS</Label>{' '}
                <Label bsStyle="info">Kimono Labs</Label>{' '}
                <Label bsStyle="info">TCGPlayer Api</Label>{' '}
                <Label bsStyle="info">Firebase</Label>
              </div>
            </Col>
            <Col md={8}>
              <div className="projects">
                <ul>
                  <li>Developed with others a web application with MeteorJS that looked up prebuild decks and totaled real-time deck prices</li>
                  <li>Used Kimono Labs to scrap deck data into Firebase, and used TCGPlayer’s Api to check card prices</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="row-cont">
          <Col md={4}>
            <h2><a href="https://github.com/Jonathansw/Discord-Bot" target="_blank" rel="noopener noreferrer">Personal Discord Bot</a></h2>
            <div>
              <Label bsStyle="info">NodeJS</Label>{' '}
              <Label bsStyle="info">Anilist Api (GraphQL)</Label>{' '}
              <Label bsStyle="info">HLTV Api</Label>{' '}
              <Label bsStyle="info">Heroku</Label>
            </div>
          </Col>
          <Col md={8}>
            <div className="projects">
              <ul>
                <li>Developed a Discord bot in NodeJS that displays information such as schedule to air anime, and Counter Strike matches</li>
                <li>Used AniList’s GraphQL api and HLTV api to query for all of specific anime or live/upcoming Counter Strike that came out today when the bot is queried</li>
                <li>Deployed the bot on Heroku allow the bot to be integrated to any Discord server</li>
              </ul>
            </div>
          </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

export default Project;