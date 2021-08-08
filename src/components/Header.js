import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
              <i className="fa-fw fa fa-search"></i>Search
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <i className="fas fa-users-cog"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
