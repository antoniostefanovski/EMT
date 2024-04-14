import React, { useEffect, useState } from 'react'
import { EditBookContainer } from './edit-book.styles'
import { AddBookDTO } from '../../models/dto/AddBookDTO';
import { BookCategory } from '../../enums/BookCategory';
import { Author } from '../../models/Author';
import { LibraryService } from '../../repository/LibraryService';
import { Label, InputElement, Select, SubmitButton, ErrorMessage } from './add-book.styles';
import { EditBookDTO } from '../../models/dto/EditBookDTO';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const {id} = useParams();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [book, setBook] = useState<EditBookDTO | undefined>();
  
  const [showError, setShowError] = useState(false);

  const service = LibraryService;

  useEffect(() => {
    document.title = "LibraryApp - Add Book";
    getData();
  },[]);

  const getAuthors = async () => {
    return service.fetchAuthors().then((data) => setAuthors(data.data));
  }

  const getCategories = () => {
    return Object.values(BookCategory) as BookCategory[];
  }

  const getData = async () => {
    let book = (await service.getBook(Number(id))).data;
    let editDto: EditBookDTO = {
      id: book.id,
      name: book.name,
      category: book.category,
      authorId: book.author.id,
      availableCopies: book.availableCopies
    };
    setBook(editDto);
    getAuthors();
  }

  const validateSubmit = () => {
    if (!book) {
      return;
    }

    if (book.id == undefined || book.name === undefined || book.category == undefined || book.authorId == undefined || book.availableCopies == undefined || book.availableCopies < 0) {
      setShowError(true);
      return;
    }


    setShowError(false);
    let dto = new EditBookDTO(book.id, book.name, book.category, book.authorId, book.availableCopies);
    service.editBook(dto);
    window.location.replace('http://localhost:3000/books');
  }

  return (
    <EditBookContainer>
        <Label>Book Name</Label>
          <InputElement type="text" name="name" placeholder="Enter book name" value={book?.name} onChange={(e) => setBook({ ...book, name: e.target.value })}/>

          <Label>Category</Label>
          <Select value={book?.category} onChange={(e) => setBook({ ...book, category: e.target.value as BookCategory })}>
          {getCategories().map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
          </Select>

          <Label>Author</Label>
          <Select value={book?.authorId} onChange={(e) => setBook({...book, authorId: Number(e.target.value)})}>
            <option value={-1}>Choose Author</option>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>{a.name} {a.surname}</option>
          ))}
          </Select>

          <Label>Available Copies</Label>
          <InputElement type="number" name="availableCopies" 
                        placeholder="Enter number of copies"
                        value={book?.availableCopies}
                        onChange={(e) => setBook({...book, availableCopies: Number(e.target.value)})}/>
          <SubmitButton onClick={validateSubmit}>Edit Book</SubmitButton>

          {showError && <ErrorMessage>All fields are required!</ErrorMessage>}
    </EditBookContainer>
  )
}

export default EditBook