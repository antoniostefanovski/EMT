package finki.ukim.mk.libraryapp.web;

import finki.ukim.mk.libraryapp.model.Book;
import finki.ukim.mk.libraryapp.model.dto.BookDTO;
import finki.ukim.mk.libraryapp.service.AuthorService;
import finki.ukim.mk.libraryapp.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    private final BookService service;
    private final AuthorService authorService;

    public BookController(BookService service, AuthorService authorService) {
        this.service = service;
        this.authorService = authorService;
    }

    @PostMapping("/add-book")
    public ResponseEntity<Void> addBook(@RequestBody BookDTO bookDTO) {
        if(bookDTO == null) {
            return ResponseEntity.notFound().build();
        }

        if(authorService.findById(bookDTO.getAuthorId()) == null) {
            return ResponseEntity.notFound().build();
        }

        this.service.create(bookDTO.getName(), bookDTO.getCategory(), bookDTO.getAuthorId(), bookDTO.getAvailableCopies());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/delete-book")
    public ResponseEntity<Void> deleteBook(@RequestBody BookDTO bookDTO) {
        if(bookDTO == null) {
            return ResponseEntity.notFound().build();
        }

        if(service.findById(bookDTO.getId()) == null) {
            return ResponseEntity.notFound().build();
        }

        this.service.deleteById(bookDTO.getId());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/edit-book")
    public ResponseEntity<Void> editBook(@RequestBody BookDTO bookDTO) {
        if(bookDTO == null) {
            return ResponseEntity.notFound().build();
        }

        if(authorService.findById(bookDTO.getAuthorId()) == null || service.findById(bookDTO.getId()) == null) {
            return ResponseEntity.notFound().build();
        }

        this.service.update(bookDTO.getId(), bookDTO.getName(), bookDTO.getCategory(), bookDTO.getAuthorId(), bookDTO.getAvailableCopies());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/mark-book")
    public ResponseEntity<Void> markBook(@RequestBody BookDTO bookDTO) {
        if(bookDTO == null) {
            return ResponseEntity.notFound().build();
        }

        if(service.findById(bookDTO.getId()) == null) {
            return ResponseEntity.notFound().build();
        }

        this.service.mark(bookDTO.getId());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks() {
        var books = this.service.listAll();

        return ResponseEntity.ok(books);
    }
}
