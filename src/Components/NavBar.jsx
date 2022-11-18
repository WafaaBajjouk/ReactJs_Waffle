import React, { Component } from 'react'
import '../App.css';
import {NavLink } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
import {FaStroopwafel} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'

class NavBar extends Component {
    render() {
        return (
            <div className="mainnavbar">
                <nav className="navbar">
                  <ul className="list">
                      <li className="title">
                      <FaCode className="icon"/>

                             Waffle</li>
                          <li className="items">
                                <FaHome className="icon"/>
                                <NavLink  style={{ textDecoration: 'none' }} className="link"  exact to="/">Home</NavLink>
                            </li>

                            <li className="items">
                                <FaUser className="icon"/>
                                <NavLink  style={{ textDecoration: 'none' }} className="link"  exact to="/aboutme">About me </NavLink>
                            </li>

                            <li className="items">
                                <FaCode className="icon"/>
                                <NavLink    style={{ textDecoration: 'none' }} className="link" exact to="/projects">Projects</NavLink>
                            </li>
                  </ul>
                 </nav>
            </div>
        )
    }
}

export default NavBar;


