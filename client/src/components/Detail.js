import React, { Component } from 'react';
import queryString from 'query-string';
import history from '../utils/history';

class Detail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			address: '',
			title: '',
		}
	}

	componentDidMount() {
		let parse = queryString.parse(history.location.search);
		this.setState(state => ({
			...state, address: parse.address ? parse.address : ''
		}));
	}

	/**
	 * Go back to main page function
	 */
	backToMainPage(event) {
		history.push('/');
	} 

	render() {
		let { address, title } = this.state;
		return(
			<div style={{ margin: '20px' }}>
				<div className="form-group">
					<label htmlFor="">Propery Address</label>
					<input type="text" name="address" className="form-control" readOnly="readOnly" value={ address }/>
				</div>
				<div className="form-group">
					<label htmlFor="">Property Title</label>
					<input type="text" name="title" className="form-control" readOnly="readOnly" value={ title }/>
				</div>
				<div className="form-group">
					<button className="btn btn-primary" onClick={ this.backToMainPage }>
						Back to Main Page
					</button>
				</div>
			</div>
		);
	}
}

export default Detail;
