import React from "react";
import { contactsList } from "./constants";
import ContactCard from "./ContactCard";
import ContactFilter from "./ContactFilter";
import ContactSearch from "./ContactSrearch";

export default function ContactList({ contactCardTab = "activity", path }) {
  return (
    <section className="contactList">
      <ContactFilter />
      <ContactSearch />
      <ul>
        {contactsList.map((contact) => (
          <ContactCard
            contact={contact}
            contactCardTab={contactCardTab}
            path={path}
            key={contact.name}
          />
        ))}
      </ul>
    </section>
  );
}
