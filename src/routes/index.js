/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import table from './dashboardPages/tables';
import button from './dashboardPages/buttons';
import icons from './dashboardPages/icons';
import blank from './dashboardPages/blank';
import error from './error';

//tambahan
import alproCritical from './dashboardPages/alproCritical';
import network from './dashboardPages/network';
import database from './dashboardPages/database';
import fraud from './dashboardPages/fraud';
import security from './dashboardPages/security';
import summary from './dashboardPages/summary';
//
import Header from '../components/Header';

export default [

  {
    path: '/login',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },


  {
    path: '/',

  // keep in mind, routes are evaluated in order
    children: [
      home,
      // contact,
      table,
      button,
      alproCritical,
      network,
      database,
      fraud,
      security,
      summary,
      icons,//     typography,
      // register,
      blank,

      // place new routes before...
      // content,
      error,
    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div>
          <Header />
          <div id="page-wrapper" className="page-wrapper">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
];
