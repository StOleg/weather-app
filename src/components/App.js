import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { simpleAction } from '../actions/simpleAction';

export class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.simpleAction();
	}

	render() {
		return (
			<div className='App'>
				<h1>Hello, React!!</h1>
				<button onClick={this.handleClick}>Test redux action</button>
				<pre>
					{JSON.stringify(this.props)}
				</pre>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = {
	simpleAction
};

App.propTypes = {
	simpleAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);