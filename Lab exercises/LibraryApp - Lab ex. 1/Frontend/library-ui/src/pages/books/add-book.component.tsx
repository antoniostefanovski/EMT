import React, { useEffect, useState } from 'react'
import { AddBookContainer, ErrorMessage, InputElement, Label, Select, SubmitButton } from './add-book.styles'
import { Author } from '../../models/Author'
import { BookCategory } from '../../enums/BookCategory';
import { LibraryService } from '../../repository/LibraryService';
import { AddBookDTO } from '../../models/dto/AddBookDTO';

const AddBook = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [categories, setCategories] = useState<BookCategory[]>([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState(BookCategory.NONE);
    const [author, setAuthor] = useState(-1);
    const [availableCopies, setAvailableCopies] = useState(-1);
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
      const categories = Object.values(BookCategory) as BookCategory[];
      return setCategories(categories);
    }

    const getData = () => {
      getAuthors();
      getCategories();
    }

    const validateSubmit = () => {
      if(name === "" || category == BookCategory.NONE || author == -1 || availableCopies < 0) {
        setShowError(true);
        return;
      }


      setShowError(false);
      let dto = new AddBookDTO(name, category, author, availableCopies);
      service.addBook(dto);
      window.location.replace('http://localhost:3000/books')
    }

    return (
      <AddBookContainer>
          <Label>Book Name</Label>
          <InputElement type="text" name="name" placeholder="Enter book name" onChange={(e) => setName(e.target.value)}/>

          <Label>Category</Label>
          <Select onChange={(e) => setCategory(e.target.value as BookCategory)}>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
          </Select>

          <Label>Author</Label>
          <Select onChange={(e) => setAuthor(Number(e.target.value))}>
            <option value={-1}>Choose Author</option>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>{a.name} {a.surname}</option>
          ))}
          </Select>

          <Label>Available Copies</Label>
          <InputElement type="number" name="availableCopies" 
                        placeholder="Enter number of copies"
                        onChange={(e) => setAvailableCopies(Number(e.target.value))}/>
          <SubmitButton onClick={validateSubmit}>Add Book</SubmitButton>

          {showError && <ErrorMessage>All fields are required!</ErrorMessage>}
      </AddBookContainer>
    )
}

export default AddBook;