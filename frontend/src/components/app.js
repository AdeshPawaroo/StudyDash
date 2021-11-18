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
// import Clock6 from './clock3/clock6'

// import NavBarContainer from './nav/navbar_container';
// import TasksContainer from './task/tasks_container';
import MainPage from './main/main_page';
// import TaskComposeContainer from './task/create_task_container';
// import AnalyticsContainer from './profile/profile_container'
import TodosList from './todo/todos-list.component';
import CreateTodo from './todo/create_todo_component';
// import EditTodo from './todo/edit-todo.component';
import Footer from './footer/footer'
import './todo/index.css';
import Clock from './clock/clock';
import Clock2 from './clock/clock_page';
import MusicPage from './music/music_page';
import NavBar from './navbar/nav_bar';
import CalenderContainer from './calendar/calendar'

// import Clock3 from './clock2/clock';
// import SettingsContextProvider from './clock2/SettingsContext';
const App = () => (
    <div style={{ width: "100%", height: "100%"}}>
        {/* <NavBar /> */}
    
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/flashcards" component={FlashcardContainer} />
            <ProtectedRoute exact path="/flashcards/user" component={ProfileContainer} />
            <ProtectedRoute exact path="/flashcards/new" component={FlashcardCompose} />
            <ProtectedRoute exact path="/flashcards/:flashcard_id" component={FlashcardEdit} />
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/clock" component={Clock2} />
            <ProtectedRoute exact path="/calender" component={CalenderContainer}/>
            
            {/* <ProtectedRoute exact path="/clock4" component={Clock6} /> */}
  

            {/* <ProtectedRoute exact path="/tasks" component={TasksContainer} /> */}
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Route path='/list' exact component={TodosList} />
            <Route path='/playlist' exact component={MusicPage} />
            <Route exact path='/create' component={CreateTodo} />
            {/* <SettingsContextProvider> */}
                
            {/* <ProtectedRoute exact path="/clock3" component={Clock3} /> */}
            {/* </SettingsContextProvider> */}
        </Switch>
        <Footer />

    </div>
);

export default App;


    //   <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
    //   <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    //   <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />