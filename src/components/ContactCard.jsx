import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function ContactCard({ contact, contactCardTab = 'activity', path }) {
    const useLocationHook = useLocation();
    const searchParams = new URLSearchParams(useLocationHook.search);
    // searchParams.set('contactTab', contactCardTab);
  return (
    <li className="contact_card">
      <NavLink
        to={`${path}${contact.name}/${contactCardTab}/?${searchParams.toString()}`}
        isActive={() => useLocationHook.pathname.includes(contact.name)}
        activeClassName='activeParentRoute'
        className='leftNavRoute'>
        <figure className="contact_card_figure">
          <img src="" alt="" />
          <figcaption>{contact.name}</figcaption>
        </figure>
      </NavLink>
    </li>
  );
}
