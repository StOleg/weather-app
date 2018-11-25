import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import ErrorMsg from './ErrorMsg';
import DailyForecast from './DailyForecast';

export class SearchCity extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.inputSearch = React.createRef();
	}

	static propTypes = {
		fetchCity: PropTypes.func.isRequired,
		error: PropTypes.bool.isRequired,
		loading: PropTypes.bool.isRequired,
		city: PropTypes.object.isRequired,
		dailyList: PropTypes.array.isRequired
	}

	handleSearch() {
		const searchTextInput = this.inputSearch.current.value;
		this.props.fetchCity(searchTextInput);
	}

	render() {
		const { loading, error, city, dailyList } = this.props;
		return (
			<div className='app'>
				<header>
					<h1>Weather in your city</h1>
				</header>
				<div className='input-group input-group-lg'>
					<input
						type='text'
						required='required'
						ref={this.inputSearch}
						placeholder='Ex. Lviv'
					/>
					<input
						type='button'
						value='Search'
						className='btn btn-dark'
						onClick={this.handleSearch}
					/>
				</div>
				{loading
					? <Spinner />
					: error
						? <ErrorMsg />
						: <DailyForecast city={city} dailyList={dailyList} />
				}
			</div>
		);
	}
}

export default SearchCity;