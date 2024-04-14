import { useEffect, useState } from "react"
import { HomeContainer } from "./home.styles"
import { Book } from "../../models/Book";
import { BookCategory } from "../../enums/BookCategory";
import { BookList } from "../../components/book-list/book-list.component";
import { LibraryService } from "../../repository/LibraryService";

export const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [book, setBook] = useState<Book>({} as Book);
    const service = LibraryService;

    useEffect(() => {
        getData();
        document.title = "Library App - Books"
    }, []);

    const getData = async () => {
        return service.fetchBooks()
                        .then((data) => setBooks(data.data));
    }

    const getBook = async (id: Number) => {
        service.getBook(id).then((data) => setBook(data.data));
        window.location.replace(`http://localhost:3000/edit-book/${id}`);
    }

    return (
        <HomeContainer>
            <BookList 
                books={books}
                onDelete={(id) => service.deleteBook(id).then(() => getData())}
                onMarkTaken={(id) => service.markBook(id).then(() => getData())}
                onEdit={(id) => getBook(id)} />
        </HomeContainer>
    );
}