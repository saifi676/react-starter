import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <div>
      <section className="header">
        <header>
          <nav>
            <NavLink to="/">Home </NavLink>

            <NavLink to="/Blog">Blog </NavLink>

            <NavLink to="/Works">Works </NavLink>

            <NavLink to="/WorksDetail">Contact </NavLink>
          </nav>
        </header>
      </section>
    </div>
  );
};

export default header;
