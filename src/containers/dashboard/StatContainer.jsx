import React from "react";
import "./StatContainer.css";
import { FaArrowTrendUp, FaUserGroup } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
const StatContainer = ({ themeSwitcher }) => {
  const statsCard = [
    {
      icon: <FaArrowTrendUp />,
      title: "Total Sales",
      info: "+50% Income",
      amount: "$278m",
    },
    {
      icon: <LuBadgePercent />,
      title: "Daily Sales",
      info: "-13% Income",
      amount: "$421k",
    },
    {
      icon: <FaUserGroup />,
      title: "Daily User",
      info: "+48% New User",
      amount: 4215,
    },
    {
      icon: <PiShoppingCartSimpleFill />,
      title: "Products",
      info: "+25% New Product",
      amount: 548,
    },
  ];
  return (
    <div className="stats__container">
      {statsCard.map((items, index) => (
        <div
          className={
            themeSwitcher === false
              ? "stats__card"
              : "stats__card stats__dark_card"
          }
          key={index}
        >
          <div className="stats__icon_circle">{items.icon}</div>
          <div className="stats__details">
            <p>{items.title}</p>
            <p>{items.info}</p>
            <h3>{items.amount}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatContainer;
