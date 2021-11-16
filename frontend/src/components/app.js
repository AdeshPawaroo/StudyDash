import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';
// import NavBarContainer from './nav/navbar_container';
// import ProfileContainer from './profile/profile_container';
import MainPage from './main/main_page';
import TodosList from './todo/todos-list.component';
import CreateTodo from './todo/create_todo_component';
import EditTodo from './todo/edit-todo.component';
import './todo/index.css';
import Dash from './dash/dash';


const App = () => (
    <div className="everything">
    
        <Switch>
            <Route exact path='/create' component={CreateTodo} />
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <ProtectedRoute exact path="/dash" component={Dash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={MainPage} />
            <Route path='/list' exact component={TodosList} />
            <Route path='/edit/:id' component={EditTodo} />
        </Switch>

    </div>
);

export default App;


