import React from 'react';
import SearchBar from 'client/containers/SearchBar';
import WeatherList from 'client/containers/WeatherList';

function App() {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
