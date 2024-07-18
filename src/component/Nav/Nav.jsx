import React, { useContext } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { shanta } from '../../context/Context';

export default function Nav() {
  let {GetDataInp} =useContext(shanta)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bolder fs-3 Cinema" >Cinema</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
            <input className='form-control me-2 mt-2 mb-2' onChange={GetDataInp} aria-label='search' type="search" />
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/movie">Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/tv">TV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
