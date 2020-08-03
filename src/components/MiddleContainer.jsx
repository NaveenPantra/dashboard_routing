import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import Recents from './Recents';
import Contacts from './Contacts';
import Account from './Account';

export default function MiddleContainer() {
    useEffect(() => {
        console.log("Component Did Mount MiddleContainer.jsx");
    }, []);

    return (
        <div className='middleContainer'>
            <Switch>
                <Route exact path='/dashboard/recents/*'>
                    <Recents />
                </Route>
                <Route exact path='/dashboard/contacts/*'>
                    <Contacts />
                </Route>
                <Route exact path='/dashboard/account/*'>
                    <Account />
                </Route>
            </Switch>
        </div>
    )
}
