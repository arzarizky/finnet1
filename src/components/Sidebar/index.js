import React, { Component } from 'react';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div>
                <strong>ISOC</strong>
              </div>
            </li>

            <li>
              <a href="/" onClick={(e) => { e.preventDefault(); history.push('/dashboard'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li>
              <a href="/alprocritical" onClick={(e) => { e.preventDefault(); history.push('/alprocritical'); }} >
                <i className="fa-fw" /> &nbsp;Alpro Critical
              </a>
            </li>

            <li>
              <a href="/network" onClick={(e) => { e.preventDefault(); history.push('/network'); }} >
                <i className="fa-fw" /> &nbsp;Network
              </a>
            </li>

            <li>
              <a href="/database" onClick={(e) => { e.preventDefault(); history.push('/database'); }} >
                <i className="fa-fw" /> &nbsp;Database
              </a>
            </li>

            <li>
              <a href="/fraud" onClick={(e) => { e.preventDefault(); history.push('/fraud'); }} >
                <i className="fa-fw" /> &nbsp;Fraud
              </a>
            </li>

            <li>
              <a href="/security" onClick={(e) => { e.preventDefault(); history.push('/security'); }} >
                <i className="fa-fw" /> &nbsp;Security
              </a>
            </li>

            <li>
              <a href="/summary" onClick={(e) => { e.preventDefault(); history.push('/summary'); }} >
                <i className="fa-fw" /> &nbsp;Summary
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
