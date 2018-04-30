import React, {Component} from 'react';
import {} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Resume from '../documents/Resume.pdf';

import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div id="main-cont">
        <h1 className="text-center">Work Experience</h1>
        <hr/>
        <div className="container text-center">
          <div className="job">
            <p className="job-desc">Thomson Reuters • Junior Software Engineer • Phildelphia, PA • March 2015 - December 2015</p>
          </div>
          <div className="job">
            <p className="job-desc">PJM Interconnection • Platforms Operations Co-op • Phildelphia, PA • March 2014 - September 2014</p>
          </div>
          <div className="job">
            <p className="job-desc">FISDU(Drexel University) • Webmaster • Phildelphia, PA • May 2013 - May 2014</p>
          </div>
        </div>
        <div className="resume container">
          View my Resume{' '}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <FontAwesome name="arrow-right"/> 
          </a>
        </div>
      </div>
    )
  }
}

export default Experience;
