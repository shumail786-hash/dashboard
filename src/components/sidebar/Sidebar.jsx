import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import {
  PiShoppingCartSimpleFill,
  PiEnvelopeSimpleLight,
} from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { images } from "../../constants";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="app__sidebar">
      <div className="sidebar__logo">
        <Link to="/" className="sidebar__logo_link">
          <p className="logo">
            <span>Shum</span>
            <span>ail</span>
          </p>
        </Link>
      </div>
      <div className="sidebar__menus">
        <ul>
          <li>Menu</li>
          <li
            className={activeItem === 0 ? "active" : "non-active"}
            onClick={() => handleItemClick(0)}
          >
            <div className="sidebar__icons">
              <BiSolidDashboard />
            </div>
            Dashboard
          </li>
          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <div className="sidebar__icons">
              <MdAnalytics />
            </div>
            Analytics
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            <div className="sidebar__icons">
              <LuBadgePercent />
            </div>
            Sales
          </li>
          <li>Management</li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            <div className="sidebar__icons">
              <PiShoppingCartSimpleFill />
            </div>
            Products
          </li>
          <li
            className={activeItem === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            <div className="sidebar__icons">
              <FaUserGroup />
            </div>
            Customer
          </li>
          <li
            className={activeItem === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            <div className="sidebar__icons">
              <TbReportSearch />
            </div>
            Reports
          </li>
          <li>Notifications</li>
          <li
            className={activeItem === 6 ? "active" : ""}
            onClick={() => handleItemClick(6)}
          >
            <div className="sidebar__icons">
              <BsFillCreditCard2FrontFill />
            </div>
            Transactions
          </li>
          <li
            className={activeItem === 7 ? "active" : ""}
            onClick={() => handleItemClick(7)}
          >
            <div className="sidebar__icons">
              <PiEnvelopeSimpleLight />
            </div>
            Message
          </li>
        </ul>
      </div>
      <div className="sidebar__user">
        <div className="user__background_photo">
          <img src={images.user} alt="user" />
        </div>
        <div className="user__designation">
          <p>Shumail Mushtaq</p>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
