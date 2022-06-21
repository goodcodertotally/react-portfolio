import React, { Component } from "react";
import { NavLink } from "react-router-dom";

    export default class NavigationContainer extends Component {
        constructor() {
            super();
        }

    adminLinks(){}

    render () {
        return (
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>
            
                <NavLink to="/about-me">
                    About
                </NavLink>
                
                <NavLink to="/contact">
                    Contact
                </NavLink>

                <NavLink to="/blog">
                    Blog
                </NavLink>
                {true ? <button>Add Blog</button> : null }
            </div>
        );
    }

}