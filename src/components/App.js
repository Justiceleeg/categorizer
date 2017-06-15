// 
// STOPPED AT/Before STEP 12
// 

import React, { Component } from "react";
import { connect } from 'react-redux';

import "./App.css";

import NewChart from "./NewChart/NewChart";
import Sidebar from "./Sidebar/Sidebar";
import AddDataset from "./AddDataset/AddDataset";
import ActiveChart from './ActiveChart/ActiveChart';

import { createChart } from '../ducks/chart';

class App extends Component {
	render() {
		const {
			activeChart,
			charts,
			createChart
		} = this.props;
		return (
			<div className="app">
				<Sidebar />
				<main className="app__main">
					<header className="app__header">
						<h1 className="app__title">Categorizer</h1>

						<div className="app__new-chart">
							<NewChart />
						</div>
					</header>
          <div className="app__active-chart">
            <ActiveChart chart={ activeChart }/>
          </div>
				</main>
			</div>
		);
	}
}

function mapStateToProps( {activeChartIndex, charts}){
	return {
		activeChart: charts[ activeChartIndex ], 
		charts
	}
}

export default connect(mapStateToProps, { createChart })(App);

