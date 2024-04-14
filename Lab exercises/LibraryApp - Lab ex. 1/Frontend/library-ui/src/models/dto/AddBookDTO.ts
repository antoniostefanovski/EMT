import { BookCategory } from "../../enums/BookCategory";

export class AddBookDTO {
    public name?: string;
    public category?: BookCategory;
    public authorId?: number;
    public availableCopies?: number;

    constructor(name: string, category: BookCategory, authorId: number, availableCopies: number) {
        this.name = name;
        this.category = category;
        this.authorId = authorId;
        this.availableCopies = availableCopies;
    }
}