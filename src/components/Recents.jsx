import React from 'react'
import { NavLink } from 'react-router-dom';
import ContactList from './ContactList';

export default function recents() {
    return (
        <section>
            <ContactList 
                contactCardTab='activity'
                path={'/dashboard/recents/'}/>
        </section>
    )
}

