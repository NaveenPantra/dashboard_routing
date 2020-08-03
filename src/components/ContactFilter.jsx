import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const intialState = {
  incommingCalls: false,
  messages: false,
};

function getFilters(qString) {
  if (!qString.has("filters")) return intialState;
  let filters = qString.get("filters")?.split(",");
  const filterState = { ...intialState };
  filters.forEach((filter) => {
    filterState[filter] = true;
  });
  return filterState;
}

export default function ContactFilter() {
  const useLocationHook = useLocation();
  const useHistoryHook = useHistory();
  const searchParams = new URLSearchParams(useLocationHook.search);
  const [filters, setFilters] = useState(getFilters(searchParams));

  useEffect(() => {
    setFilters(getFilters(searchParams));
  }, [useLocationHook]);

  function handleOnReset(event) {
    event.preventDefault();
    searchParams.delete("filters");
    useHistoryHook.push(
      `${useLocationHook.pathname}?${searchParams.toString()}`
    );
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const filtesQString = Object.keys(filters)
      .filter((filter) => filters[filter])
      .join(",");
    searchParams.set("filters", filtesQString);
    useHistoryHook.push(
      `${useLocationHook.pathname}?${searchParams.toString()}`
    );
  }

  function handleOnChange(event) {
    const { name } = event.target;
    setFilters((pevFilters) => ({
      ...pevFilters,
      [name]: !pevFilters[name],
    }));
  }

  const isSubmitDisabled = !Object.keys(filters).some(
    (filter) => filters[filter]
  );

  return (
    <form
      className="contact_filter_form"
      onReset={handleOnReset}
      onSubmit={handleOnSubmit}
    >
      <section>
        <div>
          <input
            type="checkbox"
            name="incommingCalls"
            id="incommingCalls"
            checked={filters["incommingCalls"]}
            onChange={handleOnChange}
          />
          <label htmlFor="incommingCalls">Incomming Calls</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="messages"
            id="messages"
            checked={filters["messages"]}
            onChange={handleOnChange}
          />
          <label htmlFor="messages">Messages</label>
        </div>
      </section>
      <div className='submissions'>
        <input type="reset" value="Reset" />
        <input disabled={isSubmitDisabled} type="submit" value="Apply" />
      </div>
    </form>
  );
}
