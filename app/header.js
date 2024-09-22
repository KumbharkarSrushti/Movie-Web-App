import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="row align-items-center">
        <div className="col-4 col-md-auto">
          <img src="/Vector.svg" alt="Movie Hub" className="header-img" />
          <span className="mb-0 head-text">Movie Hub</span>
        </div>
        <div className="col-md-4 col-12 input">
          <div className="row align-items-center">
            <input type="text" className="form-control search-input"/>
            <button className="search-button">Add</button>
          </div>
        </div>
        <div className="col-4 col-md-auto text-end">
          <span className="mb-0">List</span>
          <span className="mb-0 ms-3">Add Movie</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
