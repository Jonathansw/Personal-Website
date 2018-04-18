import * as Scroll from 'react-scroll';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Intro from './Intro';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
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
      smooth: 'easeInOutQuart'
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var offSet = event.path[1].window.pageYOffset;
    var addClass = '';
    var rect = ReactDOM.findDOMNode(this.refs.navbar).getBoundingClientRect();
    console.log(rect.top);
    if (offSet >= 50){
      addClass = 'sticky';
    } else {
      addClass = '';
    }
    this.setState({
      activeClass: 'test'
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar className = {`nav-top`} ref = "navbar">
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
            <NavItem onClick={() => this.scrollTo('contact')}>
              Contact Me
            </NavItem>
          </Nav>
        </Navbar>
        {/* Intro Section */}
        <Element name="intro" className="container intro">
          <Intro/>
        </Element>
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
        <Element name="contact" className="container contact">
          {/* Contact Me */}
          <Contact/>
        </Element>
      </div>
    )
  }
}

export default App;
