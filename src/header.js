import ToDoList from './to_do_list';
import About from './about';
import React from 'react';
import { Link } from "react-router-dom";
import './to_do_list.css'

const Header = () => {
    return (
        <nav className="headerStyle">
                <div className = "linkButton"><Link to="/to_do_list">Užduočių tvarkyklė</Link></div>
                <div className = "linkButton"><Link to="/about">Apie</Link></div>
        </nav>
    );
};

export default Header;