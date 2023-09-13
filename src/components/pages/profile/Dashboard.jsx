import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          See Options
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/institute">Institute</Link>
          </li>
          <li>
            <Link to="/dashboard/expertise">Expertise</Link>
          </li>
          <li>
            <Link to="/dashboard/achievement">Achievement</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
