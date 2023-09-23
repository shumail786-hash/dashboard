import React, { useState } from "react";
import "./Dashboard.css";
import { FiSearch } from "react-icons/fi";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import StatContainer from "./StatContainer.jsx";
const Dashboard = () => {
  const [themeSwitcher, setThemeSwitcher] = useState(false);

  const handleThemeSwitcher = () => {
    setThemeSwitcher(!themeSwitcher);
  };
  // console.log(themeSwitcher);
  return (
    <div
      className={
        themeSwitcher === false ? "dashboard" : "dashboard dashboard_darktheme"
      }
    >
      <div
        className={
          themeSwitcher === false
            ? "app__dashboard"
            : "app__dashboard app__dashboard_darktheme"
        }
      >
        <div
          className={
            themeSwitcher === false
              ? "dashboard__search"
              : "dashboard__search dashboard__search_dark"
          }
        >
          <input
            type="search"
            placeholder="Search"
            className={
              themeSwitcher === false
                ? "dashboard__search_bar"
                : "dashboard__search_bar dashboard__searchbar_dark"
            }
          />
          <FiSearch className="dashboard__search_icon" />
        </div>
        <div
          className={
            themeSwitcher === false
              ? "dashboard__theme_switcher"
              : "dashboard__theme_switcher dashboard__theme_switcher_darkr"
          }
          onClick={handleThemeSwitcher}
        >
          {themeSwitcher === false ? <RxMoon /> : <BsSun />}
        </div>
      </div>
      <StatContainer themeSwitcher={themeSwitcher} />
    </div>
  );
};

export default Dashboard;
