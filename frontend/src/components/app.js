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
import UserProfileContainer from './profile/profile_container';
import List from './todo/List';


import Footer from './footer/footer'

import ClockContainer from './clock/clock_container';
import MusicPage from './music/music_page';
import TeamPage from './team/team'
import CalenderContainer from './calendar/calendar'


const App = () => (
    <div style={{ width: "100%", height: "100%"}}>
        {/* <NavBar /> */}
        {/* <Header /> */}
        <Switch>
            <ProtectedRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/calender" component={CalenderContainer}/>
            <ProtectedRoute exact path="/clock" component={ClockContainer} />
            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
            <ProtectedRoute exact path="/team" component={TeamPage} />
            <Route path='/list' exact component={List} />
            <Route path='/playlist' exact component={MusicPage} />
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
