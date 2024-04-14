import { useState } from "react"
import { BookCategory } from "../../enums/BookCategory"
import { Book } from "../../models/Book"
import { StyledButton, Table, TableBody, TableColumn, TableHead, TableHeader, TableRow } from "../common/common.styles"
import { IBookListProps } from "./book-list.props"
import { AddBookButton, BookListContainer, ButtonsContainer, Text } from "./book-list.styles"
import ReactPaginate from "react-paginate"
import './pagination.css'

export const BookList = (props: IBookListProps) => {

    const [size, setSize] = useState(2);
    const [page, setPage] = useState(0);

    const offset = size * page;
    const nextPageOffset = offset + size;
    const pageCount = Math.ceil(props.books.length / size);

    const Book = (id: number, book: Book) => {
        return (
            <TableRow key={id}>
                <TableColumn>{id}</TableColumn>
                <TableColumn>{book.name}</TableColumn>
                <TableColumn>{book.category}</TableColumn>
                <TableColumn>{book.author.name} {book.author.surname}</TableColumn>
                <TableColumn>{book.availableCopies.toString()}</TableColumn>
                <TableColumn>
                    <ButtonsContainer>
                        <StyledButton onClick={() => props.onEdit(book.id)} color="white" background="#0d6efd">Edit</StyledButton>
                        <StyledButton onClick={() => props.onDelete(book.id)} color="white" background="red">Delete</StyledButton>
                        {book.availableCopies.valueOf() > 0 && <StyledButton onClick={() => props.onMarkTaken(book.id)} color="white" background="#fd7e14">Mark</StyledButton>}
                    </ButtonsContainer>
                </TableColumn>
            </TableRow>
        )
    }

    const getBooks = (offset: any, nextPageOffset: any) => {
        return props.books.map((book, index) => Book(index, book)).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    const handlePageClick = (data: any) => {
        let selected = data.selected;
        console.log(selected);
        setPage(selected);
    }

    return (
      <BookListContainer>
        <AddBookButton to={'/add-book'}>Add Book</AddBookButton>
        {props.books.length > 0 && <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Category</TableHeader>
                        <TableHeader>Author</TableHeader>
                        <TableHeader>Available copies</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getBooks(offset, nextPageOffset)}
                </TableBody>
            </Table>
            <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
        </>}
        {props.books.length == 0 && <Text>There's no books.</Text>}
      </BookListContainer>
    )
}