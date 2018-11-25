import { createSelector } from 'reselect';
const threeHourlySelector = state => state.list;

const dailyList = (threeHourlyList = []) => Object.values(threeHourlyList.reduce((result, {
	dt_txt,
	dt,
	main,
	weather,
	clouds,
	wind
}) => {
	// Create new group
	const date = new Date(dt_txt);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dateShort = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	const dayName = days[date.getDay()];
	const dayHours = `${date.getHours()}:00`;
	if (!result[dateShort]) result[dateShort] = {
		dateShort,
		dayName,
		hourlyDetails: []
	};
	// Append to group
	result[dateShort].hourlyDetails.push({
		timeId: dt,
		hours: dayHours,
		temp: `${main.temp}°C`,
		humidity: main.humidity,
		pressure: main.pressure,
		weatherMain: weather[0].main,
		weatherDescription: weather[0].description,
		weatherIconUrl: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
		clouds: clouds.all,
		windSpeed: wind.speed,
		windDirection: wind.deg
	});
	return result;
}, {}));

export const dailySelector = createSelector(
	threeHourlySelector,
	dailyList
);
