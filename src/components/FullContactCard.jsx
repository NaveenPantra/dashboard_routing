import React from "react";
import {
  NavLink,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import FullContactDeatils from './FullContactDetails';
import FullContactActivity from './FullContactActivity';

function getTabPath(match, tab = "details") {
  let { params, path } = match;
  Object.keys(params).forEach((param) => {
    if (param === "tab") {
      path = path.replace(`:${param}`, tab);
    }
    path = path.replace(`:${param}`, params[param]);
  });
  return path;
}

export default function FullContactCard() {
  const useLocationHook = useLocation();
  const useHistoryHook = useHistory();
  const useParamHook = useParams();
  const useRouteMatchHook = useRouteMatch();
  const searchParams = new URLSearchParams(useLocationHook.search);
  console.log(useLocationHook, useParamHook, useRouteMatchHook);

  return (
    <section className='contact_full'>
      <header className='contact_full_header'>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`${getTabPath(useRouteMatchHook, "details")}?${searchParams.toString()}`}
                isActive={() => useRouteMatchHook.params.tab === "details"}
                activeClassName="activeParentRoute"
                className="leftNavRoute"
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${getTabPath(useRouteMatchHook, "activity")}?${searchParams.toString()}`}
                isActive={() => useRouteMatchHook.params.tab === "activity"}
                activeClassName="activeParentRoute"
                className="leftNavRoute"
              >
                Activity
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className='contact_full_main'>
        <Switch>
          <Route exact path={getTabPath(useRouteMatchHook, "details")}>
            <FullContactDeatils />
          </Route>
          <Route exact path={getTabPath(useRouteMatchHook, "activity")}>
            <FullContactActivity />
          </Route>
        </Switch>
      </main>
    </section>
  );
}
