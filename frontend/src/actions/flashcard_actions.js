import { getFlashcards, getUserFlashcards, getFlashcard, writeFlashcard, updateFlashcard, deleteFlashcard } from "../util/flashcard_api_util";

export const RECEIVE_FLASHCARDS = "RECEIVE_FLASHCARDS";
export const RECEIVE_USER_FLASHCARDS = "RECIEVE_USER_FLASHCARDS";
export const RECEIVE_NEW_FLASHCARD = "RECEIVE_NEW_FLASHCARD";
export const REMOVE_FLASHCARD = "REMOVE_FLASHCARD";

export const receiveFlashcards = flashcards => ({
    type: RECEIVE_FLASHCARDS,
    flashcards
});

export const receiveUserFlashcards = flashcards => ({
    type: RECEIVE_USER_FLASHCARDS,
    flashcards
});

export const receiveNewFlashcard = flashcard => ({
    type: RECEIVE_NEW_FLASHCARD,
    flashcard
});

export const destroyFlashcard = id => ({
    type: REMOVE_FLASHCARD,
    id
})

export const fetchFlashcards = () => dispatch => (
    getFlashcards()
        .then(flashcards => dispatch(receiveFlashcards(flashcards)))
        .catch(err => console.log(err))
);

export const fetchFlashcard = (id) => dispatch => (
    getFlashcard(id)
        .then(flashcard => dispatch(receiveFlashcards(flashcard)))
        .catch(err => console.log(err))
)

export const fetchUserFlashcards = (id) => dispatch => (
    getUserFlashcards(id)
        .then(flashcards => dispatch(receiveUserFlashcards(flashcards)))
        .catch(err => console.log(err))
);

export const composeFlashcard = (data) => dispatch => (
    writeFlashcard(data)
        .then(flashcard => dispatch(receiveNewFlashcard(flashcard)))
        .catch(err => console.log(err))
);

export const editFlashcard = (id) => dispatch => (
    updateFlashcard(id)
        .then(flashcard => dispatch(receiveNewFlashcard(flashcard)))
        .catch(err => console.log(err))
);


export const removeFlashcard = (id) => dispatch => (
    deleteFlashcard(id)
        .then(() => dispatch(destroyFlashcard(id)))
        .catch(err => console.log(err))
);
