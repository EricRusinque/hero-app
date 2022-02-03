import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import './_ui.scss'

export const Navbar = () => {

    const { user,dispatch } = useContext( AuthContext );

    const navigate = useNavigate()

    const handleLogout = () => {

        const action = {
            type: types.logout
        }


        dispatch(action)
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className='container' style={{
                borderRight:"1px solid white",
                borderLeft:"1px solid white"
            }}>
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={( {isActive} ) =>  'nav-item nav-link ' + (isActive ? 'active' : 'nav-item nav-link')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={( {isActive} ) =>  'nav-item nav-link ' + (isActive ? 'active' : 'nav-item nav-link')}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={( {isActive} ) =>  'nav-item nav-link ' + (isActive ? 'active' : 'nav-item nav-link')}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className=" user-name nav-item nav-link">
                        { user.name }
                    </span>

                    <button 
                        className="button-logout" 
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
            </div>
        </nav>
    )
}