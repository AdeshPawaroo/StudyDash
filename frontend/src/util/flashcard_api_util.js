import axios from "axios";

export const getFlashcards = () => {
    return axios.get("/api/flashcards");
};

export const getUserFlashcards = id => {
    return axios.get(`/api/flashcards/user/${id}`)
};

export const writeFlashcard = data => {
    return axios.post("/api/flashcards/", data)
};