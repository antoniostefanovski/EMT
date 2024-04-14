import { BookCategory } from "../../enums/BookCategory";
import { AddBookDTO } from "./AddBookDTO";

export class EditBookDTO extends AddBookDTO {
    public id?: number;

    constructor(id: number, name: string, category: BookCategory, authorId: number, availableCopies: number) {
        super(name, category, authorId, availableCopies);
        this.id = id;
    }
}