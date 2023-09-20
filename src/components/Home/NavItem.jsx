import React from "react";
import { Link } from "react-router-dom";

const NavItem = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/report">Report</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  const service = (
    <>
      <li className="text-2xl mt-2">Expert doctor consultation</li>
      <li className="text-2xl mt-2">Non-resident welfare</li>
      <li className="text-2xl mt-2">Women entrepreneurs</li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Parent</a>
                <ul className="p-2">{service}</ul>
              </li>
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Medicine</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Service</summary>
                <ul className="p-2">{service}</ul>
              </details>
            </li>
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
