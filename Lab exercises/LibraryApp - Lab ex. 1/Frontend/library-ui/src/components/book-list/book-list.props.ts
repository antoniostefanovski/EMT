import { Book } from "../../models/Book";

export interface IBookListProps {
    books: Book[];

    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onMarkTaken: (id: number) => void;
}