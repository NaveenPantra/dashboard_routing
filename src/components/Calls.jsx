import React from 'react'
import  { NavLink } from 'react-router-dom';

export default function Calls() {
    return (
        <div>
            <NavLink
                to='/dashboard/account/calls/voicegreetings/'
                activeClassName='activeNavLink'
                className='navLink callsNavLink'>
                Voice Greetings
            </NavLink>
            <NavLink
                to='/dashboard/account/calls/voicedrop/'
                activeClassName='activeNavLink'
                className='navLink callsNavLink'>
                Voice Drop
            </NavLink>
            <NavLink
                to='/dashboard/account/calls/callforwarding/'
                activeClassName='activeNavLink'
                className='navLink callsNavLink'>
                Call Forwarding
            </NavLink>
        </div>
    )
}
