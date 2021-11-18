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
import List from './todo/List';

import MainPage from './main/main_page';
import Footer from './footer/footer'


import Clock2 from './clock/clock_page';
import MusicPage from './music/music_page';

import CalenderContainer from './calendar/calendar'


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
            

            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Route path='/list' exact component={List} />
            <Route path='/playlist' exact component={MusicPage} />
     
        </Switch>
        <Footer />

    </div>
);

export default App;
