import React, { useRef } from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const searchInput = useRef();

  const handleChange = () => {
    // props.onSearch(searchInput.current.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchInput.current.value);
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
