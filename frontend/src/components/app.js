import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';

import FlashcardContainer from './flashcards/flashcards_container';
import ProfileContainer from './flashcards/flashcards_user_container';
import FlashcardCompose from './flashcards/flashcard_compose_container';
import FlashcardEdit from './flashcards/flashcard_edit_container';

// import NavBarContainer from './nav/navbar_container';
// import TasksContainer from './task/tasks_container';
import MainPage from './main/main_page';
// import TaskComposeContainer from './task/create_task_container';
// import AnalyticsContainer from './profile/profile_container'
import TodosList from './todo/todos-list.component';
import CreateTodo from './todo/create_todo_component';
import EditTodo from './todo/edit-todo.component';
import './todo/index.css';
const App = () => (
    <div>
    
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/flashcards" component={FlashcardContainer} />
            <ProtectedRoute exact path="/flashcards/user" component={ProfileContainer} />
            <ProtectedRoute exact path="/flashcards/new" component={FlashcardCompose} />
            <ProtectedRoute exact path="/flashcards/:flashcard_id" component={FlashcardEdit} />
            <AuthRoute exact path="/" component={MainPage} />

            {/* <ProtectedRoute exact path="/tasks" component={TasksContainer} /> */}
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Route path='/list' exact component={TodosList} />
            <Route exact path='/create' component={CreateTodo} />
        </Switch>

    </div>
);

export default App;


    //   <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
    //   <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    //   <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />