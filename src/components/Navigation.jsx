import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <div className='navigation'>
            <nav className='navbar fixed-top navbar-light bg-light navbar-expand' style={{backgroundColor:'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div className='container'>
                    <NavLink className='navbar-brand' to='/'>
                        Blockchain Product Validation System
                    </NavLink>
                    <div>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                    <span className='sr-only'>(current)</span>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/register-product'>
                                    Register Product
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/query'>
                                    Query
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;

