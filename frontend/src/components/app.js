import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';

const App = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;