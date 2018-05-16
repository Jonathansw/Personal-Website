import * as Scroll from 'react-scroll';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {BrowserView, isBrowser, MobileView, isMobile} from 'react-device-detect';
import FontAwesome from 'react-fontawesome';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Intro from './Intro';
import Experience from './Experience';
import Project from './Project';
import About from './About';
import Skill from './Skill';

import './App.css'

let Element = Scroll.Element;
let scroller = Scroll.scroller;

const styleing = {
  'margin': '0 10px'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      activeClass: false
    };
  }
  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if(isBrowser) {
      this.navOffSet = ReactDOM.findDOMNode(this.refs.navbar).offsetTop;
    } else {
      this.navOffSet = 0;
    }

    this.authenticate().then(() => {
      const ele = document.getElementById('loading-screen');   
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    });
  }

  scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      offset: -50,
      activeClass: true,
      smooth: 'easeInOutQuart'
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var offSet = event.path[1].window.pageYOffset;
    var setClass = null;
    if (offSet >= this.navOffSet){
      setClass = 'sticky';
    } else {
      setClass = null;
    }
    this.setState({
      activeClass: setClass
    });
  }

  render() {
    return (
      <div className="wrapper">
        {/* Intro Section */}
        <section className="head">
        <Element name="intro" className="container intro">
          <Intro/>
        </Element>
        <BrowserView device={isBrowser}>
          <Navbar className={`nav-top ${this.state.activeClass}`} ref="navbar">
          <Nav>
            <NavItem onClick={() => this.scrollTo('about')}>
              About Me
            </NavItem>
            <NavItem onClick={() => this.scrollTo('skill')}>
              Skills
            </NavItem>
            <NavItem onClick={() => this.scrollTo('exp')}>
              Experience
            </NavItem>
            <NavItem onClick={() => this.scrollTo('proj')}>
              Projects
            </NavItem>
          </Nav>
          </Navbar>
        </BrowserView>
        </section>
        <Element name="about" className="container about">
          {/* Experience */}
          <About/>
        </Element>
        <Element name="skills" className="container skill">
          <Skill/>
        </Element>
        <Element name="exp" className="container exp">
          {/* Experience */}
          <Experience/>
        </Element>
        <Element name="proj" className="container proj">
          {/* Projects */}
          <Project/>
        </Element>
        <footer className="footer">
          <div className="footer-links">
            <MobileView device={isMobile}>
              <a href="mailto:jonathansw@outlook.com" target="_blank" rel="noopener noreferrer" style={styleing}>
                <FontAwesome name="envelope" size="2x" style={{'color': 'smokewhite'}}/>
              </a>
              <a href="https://github.com/Jonathansw/" target="_blank" rel="noopener noreferrer" style={styleing}>
                <FontAwesome name="github" size="2x" style={{'color': 'smokewhite'}}/>
              </a>
              <a href="https://www.linkedin.com/in/jonathansw/" target="_blank" rel="noopener noreferrer" style={styleing}>
                <FontAwesome name="linkedin" size="2x" style={{'color': 'smokewhite'}}/>
              </a>
              <a href="https://www.instagram.com/jxhnwxng/" target="_blank" rel="noopener noreferrer" style={styleing}>
                <FontAwesome name="instagram" size="2x" style={{'color': 'smokewhite'}}/>
              </a>
            </MobileView>
            <BrowserView device={isBrowser}>
              <a href="mailto:jonathansw@outlook.com" target="_blank" rel="noopener noreferrer">
                <span className="footer-text">Email</span>
              </a>
              <a href="https://github.com/Jonathansw/" target="_blank" rel="noopener noreferrer">
                <span className="footer-text">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/jonathansw/" target="_blank" rel="noopener noreferrer">
                <span className="footer-text">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/jxhnwxng/" target="_blank" rel="noopener noreferrer">
                <span className="footer-text">Instagram</span>
              </a>
            </BrowserView>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
