import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar () {
    return (
        <div className={s.Nav}>
                <div className={s.Item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.Item}>
                    <NavLink to="/properties" activeClassName={s.active}>Properties</NavLink>
                </div>
        </div>
    )
};

export default Navbar;