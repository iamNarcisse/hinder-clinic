import React, {Component} from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import TableList from "./TableList.jsx";
// import PatientHistory from "./PaitentHistory";
import Calendar from "./Calender.jsx";

const hist = createBrowserHistory();


class CalenderIndex extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/" component={Calendar} />
                    <Route path="/day" component={TableList} />
                </Switch>
            </Router>
        );
    }
}

export default CalenderIndex;