import React, { useEffect } from 'react'
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';

export default function LeftNavBar() {
    const routerLocationHook = useLocation();
    useEffect(() => {
        console.log('Component Did Mount LeftNavBar.js');
    }, []);
    return (
        <div className='leftNavBar'>
            <NavLink 
            to='/dashboard/recents/' 
            activeClassName='activeParentRoute'
            className='leftNavRoute'>
                RE
            </NavLink>
            <NavLink 
            to='/dashboard/contacts/organisation/'
            isActive={() => routerLocationHook.pathname.startsWith('/dashboard/contacts')}
            activeClassName='activeParentRoute'
            className='leftNavRoute'>
                CO
            </NavLink>
            <NavLink 
            to='/dashboard/account/profile/' 
            isActive={() => routerLocationHook.pathname.startsWith('/dashboard/account')}
            activeClassName='activeParentRoute'
            className='leftNavRoute'>
                AC
            </NavLink>
        </div>
    )
}
