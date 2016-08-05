import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chart from 'client/components/Chart';
import Map from 'client/components/Map';
import './style.scss';

const propTypes = {
  weather: PropTypes.array,
};

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /></td>
        <td>
          <Chart color="blue" data={temps} units="K" />
        </td>
        <td>
          <Chart color="green" data={pressures} units="hPa" />
        </td>
        <td>
          <Chart color="black" data={humidities} units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = propTypes;

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
