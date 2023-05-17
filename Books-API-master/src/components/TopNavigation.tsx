import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadAllBooks } from "../redux/actions";

import { useAppDispatch } from "../redux/hooks";
import "./TopNavigation.scss";

const TopNavigation = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllBooks());
  }, []);
  return (
    <div className="nav-wrapper">
      <header>
        <h1>Book API</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TopNavigation;
