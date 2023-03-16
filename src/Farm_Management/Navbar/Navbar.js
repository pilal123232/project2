import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
   return (
      <nav className="navbar navbar-light bg-white shadow p-0">
         <div className="container-fluid flex-nowrap">
            <div className="User d-flex flex-nowrap">
               <Link className="navbar-brand p-0 mx-2">
                  <div className="d-inline-block w-25">
                     <i className="fa-solid fa-user ps-2"></i>
                     <span className="border-start ps-2">mosab-abd</span>
                  </div>
               </Link>
               <Link><i className="fa-regular fa-bell text-black mt-2"></i></Link>
            </div>
            <form className="d-flex Search">
               <button className="btn bg-light" type="submit"><i className="fa-solid fa-magnifying-glass"/></button>
               <input className="form-control bg-light" type="search"  aria-label="Search"/>
            </form>
         </div>
      </nav>
   );
};
export default Navbar;
