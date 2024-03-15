package finki.ukim.mk.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @Enumerated(EnumType.STRING)
    Category category;
    @ManyToOne(cascade = CascadeType.ALL)
    Author author;
    Integer availableCopies;
    Boolean isRented;

    public Book() {}

    public Book(String name, Category category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
        this.isRented = false;
    }
}
