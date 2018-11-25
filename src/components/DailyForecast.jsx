import React from 'react';
import PropTypes from 'prop-types';

const DailyForecast = (props) => {
	return (
		<div>
			<div className='cityName'>
				{props.city.name}
			</div>
			{props.dailyList.map((day) =>
				<div key={day.dateShort} className='dayWeather'>
					<div className='dayDetails'>
						<span>{day.dayName}</span>
						<span>{day.dateShort}</span>
					</div>
					{day.hourlyDetails.map((details) =>
						<div key={details.timeId} className='hourlyDetails'>
							<span>{details.hours}</span>
							<span>{details.weatherMain}</span>
							<span>{details.temp}</span>
							<span><img className='rounded-circle' src={details.weatherIconUrl} alt={details.weatherDescription} height='50' width='50' /></span>
							<span>{details.weatherDescription}</span>
							<span>{details.humidity}</span>
							<span>{details.pressure}</span>
							<span>{details.clouds}</span>
							<span>{details.windSpeed}</span>
							<span>{details.windDirection}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

DailyForecast.propTypes = {
	city: PropTypes.object.isRequired,
	dailyList: PropTypes.array.isRequired
};

export default DailyForecast;