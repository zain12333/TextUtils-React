import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="logo192.png" alt="" width="40" height="40" className="d-inline-block align-top" /></a>
  
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">HTML</a></li>
              <li><a className="dropdown-item" href="/">CSS</a></li>
              <li><a className="dropdown-item"  href="/">BOOTSTRAP</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">JAVASCRIPT AND ALL INCLUDED</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true"  href="/">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
// Navbar.prototypes{
//     aboutText:prototypes.string.isrequired;
// }

// Navbar.defaultProps{
//     aboutText: "About3";

// }

// agr hum ny app.js ma navbar ma value assign nhi ke to direct ya sy import kar lya gya 