import React from "react";
import "./Sidebar.css";
import {NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const menuItem = [
    {
      path : "/",
      name : "الرئيسية",
      icon : <i className="fa fa-house"/>
    },
    {
      path : "/health",
      name : "قسم الرعاية الصحية",
      icon : <i className="fa fa-heart-pulse"/>
    },
    {
      path : "/milk",
      name : "قسم المراقبة",
      icon : <i className="fa fa-chart-simple"/>
    },
    {
      path : "/checking",
      name : "قسم الإنتاجية",
      icon : <i className="fa fa-dollar"/>
    }
    
  ]
  return (
    <aside className="Sidebar col-2">
      <div></div>
      <ul className="nav flex-column">
        {
          menuItem.map((item , index) => (
            <li key={index}>
              <hr className="m-auto"></hr>
              <NavLink to={item.path} className="nav-link" activeclassname="active">
                {item.icon}
                <span className="d-none d-sm-inline ms-2">{item.name}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </aside>
    
  );
};

export default Sidebar;
