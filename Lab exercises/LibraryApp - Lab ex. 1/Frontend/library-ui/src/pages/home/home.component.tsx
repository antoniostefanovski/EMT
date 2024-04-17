import { useEffect, useState } from "react"
import { HomeContainer, InputButton, InputTerm, SearchBar } from "./home.styles"
import { Book } from "../../models/Book";
import { BookCategory } from "../../enums/BookCategory";
import { BookList } from "../../components/book-list/book-list.component";
import { LibraryService } from "../../repository/LibraryService";

export const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [book, setBook] = useState<Book>({} as Book);
    const [searchTerm, setSearchTerm] = useState("");
    const service = LibraryService;

    useEffect(() => {
        getData();
        document.title = "Library App - Books"
    }, []);

    const getData = async () => {
        return service.fetchBooks("")
                        .then((data) => setBooks(data.data));
    }

    const getBook = async (id: Number) => {
        service.getBook(id).then((data) => setBook(data.data));
        window.location.replace(`http://localhost:3000/edit-book/${id}`);
    }

    const getMovie = async () => {
        service.fetchBooks(searchTerm)
                    .then((data) => setBooks(data.data));
    }

    return (
        <HomeContainer>
            <SearchBar>
                <InputTerm type={"text"} placeholder={"Enter Book Name"} name={"searchterm"} onChange={(e) => setSearchTerm(e.target.value)}></InputTerm>
                <InputButton onClick={getMovie}>Search</InputButton>
            </SearchBar>
            <BookList 
                books={books}
                onDelete={(id) => service.deleteBook(id).then(() => getData())}
                onMarkTaken={(id) => service.markBook(id).then(() => getData())}
                onEdit={(id) => getBook(id)} />
        </HomeContainer>
    );
}