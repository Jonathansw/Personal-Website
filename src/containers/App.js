import * as Scroll from 'react-scroll';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {BrowserView, isBrowser} from 'react-device-detect';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Intro from './Intro';
import Experience from './Experience';
import Project from './Project';
import About from './About';

import './App.css'

let Element = Scroll.Element;
let scroller = Scroll.scroller;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      activeClass: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
    var navOffSet = ReactDOM.findDOMNode(this.refs.navbar).getBoundingClientRect().top;
    if (offSet >= navOffSet + 415){
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
            <a href="mailto:jonathansw@outlook.com" target="_blank" rel="noopener noreferrer">
              <span class="footer-text">Email</span>
            </a>
            <a href="https://github.com/Jonathansw/" target="_blank" rel="noopener noreferrer">
              <span class="footer-text">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/jonathansw/" target="_blank" rel="noopener noreferrer">
              <span class="footer-text">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/jxhnwxng/" target="_blank" rel="noopener noreferrer">
              <span class="footer-text">Instagram</span>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
