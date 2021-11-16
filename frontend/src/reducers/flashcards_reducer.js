import { RECEIVE_FLASHCARDS, RECEIVE_USER_FLASHCARDS, RECEIVE_NEW_FLASHCARD } from "../actions/flashcard_actions";

const FlashcardsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FLASHCARDS:
            newState.all = action.flashcards.data;
            return newState;
        case RECEIVE_USER_FLASHCARDS: 
            newState.user = action.flashcards.data;
            return newState;
        case RECEIVE_NEW_FLASHCARD:
            newState.new = action.flashcard.data;
            return newState;
        default:
            return state;
    }
};

export default FlashcardsReducer;