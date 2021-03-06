/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
              {/* <img src={logo} alt="Start React" title="Start React" /> */}
              <span>&nbsp;Logo finnet </span>
                {/* <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a> */}
                {/* <button type="button" className="navbar-toggle" onClick={() => {toggleMenu();}} style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button> */}
            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
            {<span style={ {madrginRight: 20} } > Beranda </span>}
            {<span style={ {marginRight: 20} } > Jadwal </span>}
            {<span style={ {marginRight: 20} } > IIS </span>}
            {<span style={ {marginRight: 20} } > Inciddent </span>}
            {<span> Kontak </span>}
            <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
                    <MenuItem eventKey="1">
                      <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
                    </MenuItem>
                    <MenuItem eventKey="2">
                      <span><i className="fa fa-gear fa-fw"></i> Settings </span>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey = "3" href = 'http://www.strapui.com' >
                      <span> <i className = "fa fa-eye fa-fw" /> Premium React Themes </span>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey = "4" onClick = {(event) => { history.push('/login');}}>
                      <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
                    </MenuItem>
              </NavDropdown>

          </ul>
          <Sidebar />
    </Navbar>
    </div>
  );
}
function toggleMenu(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  }

export default Header;
