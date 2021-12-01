import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';


import UserFlashcards from "./flashcardsv2/user_flashcards";
import { CreateFlashcard } from './flashcardsv2/flashcard_create';
import { FlashcardEdit } from './flashcardsv2/flashcard_edit';


// import FlashcardContainer from './flashcards/flashcards_container';
// import UserCards from './flashcards/flashcards_user_container';
// import FlashcardCompose from './flashcards/flashcard_compose_container';
// import FlashcardEdit from './flashcards/flashcard_edit_container';
import UserProfileContainer from './profile/profile_container';
// import NavBarContainer from './nav/navbar_container';
// import TasksContainer from './task/tasks_container';
import List from './todo/List';

import MainPage from './main/main_page';
import Footer from './footer/footer'
import clock from './clock/clock'
import Header from './header/header';
import Clock2 from './clock/clock_page';
import ClockContainer from './clock/clock_container';
import MusicPage from './music/music_page';

import CalenderContainer from './calendar/calendar'


const App = () => (
    <div style={{ width: "100%", height: "100%"}}>
        {/* <NavBar /> */}
        {/* <Header /> */}
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* 
            <ProtectedRoute exact path="/flashcards" component={FlashcardContainer} />
            <ProtectedRoute exact path="/flashcards/user" component={UserCards} />
            <ProtectedRoute exact path="/flashcards/new" component={FlashcardCompose} />
            <ProtectedRoute exact path="/flashcards/:flashcard_id" component={FlashcardEdit} /> */}
            <AuthRoute exact path="/" component={MainPage} />
            {/* <ProtectedRoute exact path="/clock" component={Clock2} /> */}
            <ProtectedRoute exact path="/calender" component={CalenderContainer}/>
            <ProtectedRoute exact path="/clock" component={ClockContainer} />
            {/* <ProtectedRoute exact path="/clock" component={clock} /> */}
            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />

            {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
            <Route path='/list' exact component={List} />
            <Route path='/playlist' exact component={MusicPage} />
            {/* <Route>
                <Footer />
            </Route> */}


    <ProtectedRoute exact path="/flashcards" component={UserFlashcards} />
            <ProtectedRoute exact path="/flashcards/new" component={CreateFlashcard} />
            <ProtectedRoute exact path="/flashcards/:flashcard_id" component={FlashcardEdit} />
     
        </Switch>
        <br />
        <br />
        <br />
        <Footer />

    </div>
);

export default App;
