import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to='/' activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to ="about" activeClassName="nav-active">
                A propos
            </NavLink>
            <NavLink exact to ="pays" activeClassName="nav-active">
                Pays
            </NavLink>
            <NavLink exact to ="citations" activeClassName="nav-active">
                Citations
            </NavLink>
            <NavLink exact to ="pokemon" activeClassName="nav-active">
                Pokedex
            </NavLink>
        </div>
    );
};

export default Navigation;