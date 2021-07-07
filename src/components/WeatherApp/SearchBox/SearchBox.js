import React, { useRef } from "react";
import debounce from "lodash.debounce";
import latinize from "latinize";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const searchInput = useRef();

  const searchForecast = () => {
    props.onSearch(latinize(searchInput.current.value));
  };

  const handleChange = debounce(searchForecast, 1200);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchForecast();
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" ref={searchInput} />
      </form>
    </div>
  );
};

export default SearchBox;
