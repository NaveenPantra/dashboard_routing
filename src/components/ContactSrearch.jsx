import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function ContactSrearch() {
  const useLocationHook = useLocation();
  const useHistoryHook = useHistory();
  const searchParams = new URLSearchParams(useLocationHook.search);
  const [searchString, setSearchString] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchString(searchParams.get('q') || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useLocationHook]);

  function handleFormSubmit(event) {
    event.preventDefault();
    getSearchResults();
  }

  function getSearchResults() {
    const currentSearchQ = searchParams.get("q");
    if (currentSearchQ?.length === 0 && searchString.length === 0) return;
    if (searchString.length === 0) {
      searchParams.delete("q");
    } else {
      searchParams.set("q", searchString);
    }
    useHistoryHook.push(
      `${useLocationHook.pathname}?${searchParams.toString()}`
    );
  }

  function handleSearcStringChange(event) {
    setSearchString(event.target.value);
  }

  return (
    <form className="contact_search_form" onSubmit={handleFormSubmit}>
      <input value={searchString} onChange={handleSearcStringChange} />
      <button>Search</button>
    </form>
  );
}
