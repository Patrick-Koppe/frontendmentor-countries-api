import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import DetailCountry from "./components/detailCountry";

function Routes (props) {
        return (
            <Router history={history}>
                <Switch>
                  <Route path = '/detailPage' render = {() => <DetailCountry detailCountry={props} />} />
                </Switch>
            </Router>
        )
}

export default Routes
