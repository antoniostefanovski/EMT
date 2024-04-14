import { BookCategory } from "../enums/BookCategory";
import { Author } from "./Author";

export interface Book {
    id: number;
    name: string;
    category: BookCategory;
    author: Author;
    availableCopies: number;
}