import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import ContactList from "./ContactList";

export default function contacts() {
  return (
    <section className="contacts">
      <header className="contacts_header">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard/contacts/google/"
                activeClassName="activeParentRoute"
                className="leftNavRoute"
              >
                Google
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/contacts/organisation/"
                activeClassName="activeParentRoute"
                className="leftNavRoute"
              >
                Organisation
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="contacts_body">
        <Switch>
        <Route exact path={["/dashboard/contacts/google/", '/dashboard/contacts/google/:contact/:tab']}>
            <ContactList 
                contactCardTab="details"
                path={'/dashboard/contacts/google/'} />
          </Route>
          <Route exact path="/dashboard/contacts/organisation/*">
            <ContactList 
                contactCardTab="details"
                path={'/dashboard/contacts/organisation/'} />
          </Route>
        </Switch>
      </main>
    </section>
  );
}
