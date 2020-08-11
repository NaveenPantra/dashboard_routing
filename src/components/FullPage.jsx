import React from "react";
import { Link } from "react-router-dom";

export default function FullPage() {
  return (
    <div>
      <h2>Hello This is Full Page route.</h2>

      <p>
        This demonstrate the page that can be shown in full page aparat form the
        dashboard layout
      </p>
      <Link to="/dashboard/recents/">Dashbord Recents</Link>
    </div>
  );
}
