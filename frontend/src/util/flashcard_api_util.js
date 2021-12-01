import axios from "axios";

export const getFlashcards = () => {
    return axios.get("/api/flashcards");
};

export const getUserFlashcards = user_id => {
    return axios.get(`/api/flashcards/user/${user_id}`)
};

export const getFlashcard = flashcard_id => {
    return axios.get(`/api/flashcards/${flashcard_id}`)
}

export const writeFlashcard = data => {
    return axios.post("/api/flashcards/", data)
};

export const updateFlashcard = flashcard_id => {
    return axios.post(`api/flashcards/${flashcard_id}`)
};

export const deleteFlashcard = flashcard_id => {
    return axios.delete(`/api/flashcards/${flashcard_id}`)
};