package finki.ukim.mk.libraryapp.service.impl;

import finki.ukim.mk.libraryapp.model.Author;
import finki.ukim.mk.libraryapp.model.Book;
import finki.ukim.mk.libraryapp.model.Category;
import finki.ukim.mk.libraryapp.model.exceptions.BookNotFoundException;
import finki.ukim.mk.libraryapp.repository.AuthorRepository;
import finki.ukim.mk.libraryapp.repository.BookRepository;
import finki.ukim.mk.libraryapp.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Book> listAll() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book findById(Long id) {
        return bookRepository.findById(id).orElseThrow(BookNotFoundException::new);
    }

    @Override
    public void deleteById(Long id) {
        var book = this.findById(id);
        this.bookRepository.delete(book);
    }

    @Override
    public Book create(String name, Category category, Long authorId, Integer availableCopies) {
        Author author = authorRepository.findById(authorId).get();
        Book book = new Book(name, category, author, availableCopies);

        return bookRepository.save(book);
    }

    @Override
    public Book update(Long id, String name, Category category, Long authorId, Integer availableCopies) {
        Book book = this.findById(id);
        Author author = authorRepository.findById(authorId).get();

        book.setName(name);
        book.setCategory(category);
        book.setAuthor(author);
        book.setAvailableCopies(availableCopies);

        return bookRepository.save(book);
    }

    @Override
    public void mark(Long id) {
        Book book = this.findById(id);
        book.setAvailableCopies(book.getAvailableCopies() - 1);
        bookRepository.save(book);
    }
}
