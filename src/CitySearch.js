import React, { useState } from "react";

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedCity = inputValue.replace(/ /g, "-");
    getAirQuality(formattedCity);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter a City"
        onChange={handleInputChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default CitySearch;
