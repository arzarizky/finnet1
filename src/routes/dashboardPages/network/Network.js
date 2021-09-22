import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {
  LineChart, Tooltip, PieChart, Pie,
  Line, XAxis, YAxis, Legend,
  CartesianGrid, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts/lib';

const title = 'Network';

function plotData() {
  const data = [];
  const offset = 0;
  let sineValue;
  let cosValue;
  for (let i = 0; i < 12; i += 0.8) {
    sineValue = Math.sin(i + offset);
    cosValue = Math.cos(i + offset);
    data.push({ name: i, sine: sineValue, cosine: cosValue });
    // data.push({ name: i, cosine: cosValue });
  }
  return data;
}
const lineChartData = plotData();


const pieChartData = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const BarChartData = [
  { name: 'Page A', uv: 4000.343, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000.6756754, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000.987654, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780.472384, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890.98347593, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390.28913479283, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490.2345678, pv: 4300, amt: 2100 },
];

function displayNetwork(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Network</PageHeader>
        </div>
      </div>
    </div>
  );
}

displayNetwork.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayNetwork;
