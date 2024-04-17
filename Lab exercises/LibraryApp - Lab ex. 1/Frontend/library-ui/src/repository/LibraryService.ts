import { AddBookDTO } from "../models/dto/AddBookDTO";
import { BookCategory } from "../enums/BookCategory";
import { instance } from "../axios-config/axios";
import { EditBookDTO } from "../models/dto/EditBookDTO";

export const LibraryService = {

    fetchCountries: () => {
        return instance.get('/countries');
    },

    fetchAuthors: () => {
        return instance.get('/authors');
    },

    fetchBooks: (name: string) => {
        return instance.get(`/books?name=${name}`);
    },

    deleteBook: (id: Number) => {
        return instance.post(`/books/delete-book/${id}`);
    },

    getBook: (id: Number) => {
        return instance.get(`/books/get-book/${id}`);
    },

    addBook: (book: AddBookDTO) => {
        return instance.post(`/books/add-book`, {
            "name": book.name,
            "category": BookCategory[book.category ?? BookCategory.NONE],
            "authorId": book.authorId,
            "availableCopies": book.availableCopies
        });
    },

    editBook: (book: EditBookDTO) => {
        return instance.post(`/books/edit-book/${book.id}`, {
            "name": book.name,
            "category": BookCategory[book.category ?? BookCategory.NONE],
            "authorId": book.authorId,
            "availableCopies": book.availableCopies
        });
    },

    markBook: (id: Number) => {
        return instance.post(`/books/mark-book/${id}`);
    }
}