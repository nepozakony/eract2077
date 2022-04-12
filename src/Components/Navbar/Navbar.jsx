import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar () {
    const getClassName = (isActive) => isActive ? `s.active` : "";

    return (
        <div className={s.Nav}>
                <div className={s.Item}>
                    <NavLink to="/profile" className={getClassName}>Profile</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/messages" className={getClassName}>Messages</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/news" className={getClassName}>News</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/music" className={getClassName}>Music</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/properties" className={getClassName}>Properties</NavLink>
                </div>
        </div>
    )
}

export default Navbar;