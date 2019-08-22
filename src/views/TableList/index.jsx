import React, {Component} from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import TableList from "./TableList";
import PatientHistory from "./PaitentHistory";

const hist = createBrowserHistory();


class TableIndex extends Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    <Route path="/" component={TableList} />
                    <Route path="/patient" component={PatientHistory} />
                </Switch>
            </Router>
        );
    }
}

export default TableIndex;