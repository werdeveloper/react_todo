import React from 'react';
import ProtoTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header(props){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                Todos - {props.title}
                </NavLink> 
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/list">
                            List
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/useeffect1">
                            UseEffect1
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/useeffect2">
                            UseEffect2
                        </NavLink>
                    </li>
                </ul>
                {props.searchBar?<>
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                    Search
                    </button>
                </>: ''}
                </div>
            </div>
            </nav>
    )
}

Header.defaultProps = {
    title: "Test",
    // searchBar: ''
};

Header.protoTypes = {
    title: ProtoTypes.string,
    searchBar: ProtoTypes.bool.isRequired
};
