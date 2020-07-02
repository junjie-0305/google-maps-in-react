import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Detail from "./components/Detail";


class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/details" component={ Detail }/>
				</Switch>
			</div>
		);
	}
}

export default App;
