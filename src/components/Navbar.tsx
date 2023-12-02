import { Link, NavLink } from "react-router-dom";
import { SpinnerLoading } from  './SpinnerLoading'
import React from "react";

export const Navbar = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>143 Project</span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <a href="https://www.example.com" className='nav-link' >Heat map</a>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar