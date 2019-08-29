import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import Calender from "../src/views/Calender/Calender";
import TableList from "../src/views/Calender/TableList";

const Check = () => {
  return <div>Hello</div>;
};
export default function Main() {
  return (
    <Switch>
      <Route exact path="/admin/calendar/day" component={TableList} />
      <Route exact path="/admin/calendar/" component={Calender} />
    </Switch>
  );
}
