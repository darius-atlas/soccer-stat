import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-light navbar-expand-lg bg-white bb-1">
        <div className="navbar-brand text-primary">
            SoccerStat
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <button></button>
            </li>
            <li className="nav-item">
                <NavLink to="/league/list" className="nav-link" exact>Leagues</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/league/calendar" className="nav-link">League Calendar</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/team/list" className="nav-link">Teams</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/team/calendar" className="nav-link">Team Calendar</NavLink>
            </li>
        </ul>
    </nav>
)