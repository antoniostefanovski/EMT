package finki.ukim.mk.libraryapp.repository;

import finki.ukim.mk.libraryapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
