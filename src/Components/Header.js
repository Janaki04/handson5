import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

const Header = () => {
    return(
        <div>
                <div className='box'>
                    <div className="nav-item">
                        <NavLink to='/home' className='headings' style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>HOME</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/students' className='headings' style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>STUDENT</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/contact' className='headings'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>CONTACT</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Header;