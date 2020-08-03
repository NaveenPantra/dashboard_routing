import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

export default function Account() {
    const routerLocationHook = useLocation();
    window.routerLocationHook = routerLocationHook;
    return (
        <div className='accountLinks'>
            <NavLink 
                to='/dashboard/account/profile/' 
                isActive={() => routerLocationHook.pathname.startsWith('/dashboard/account/profile')}
                activeClassName='accountActiveLink'
                className='accountLink'>
                Profile
            </NavLink>
            <NavLink 
                to='/dashboard/account/calls/' 
                isActive={() => routerLocationHook.pathname.startsWith('/dashboard/account/calls')}
                activeClassName='accountActiveLink'
                className='accountLink'>
                Calls
            </NavLink>
            <NavLink 
                to='/dashboard/account/notifications/' 
                isActive={() => routerLocationHook.pathname.startsWith('/dashboard/account/notifications')}
                activeClassName='accountActiveLink'
                className='accountLink'>
                Notifications
            </NavLink>
        </div>
    )
}
