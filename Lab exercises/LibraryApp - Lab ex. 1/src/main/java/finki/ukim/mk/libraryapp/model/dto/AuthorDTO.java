package finki.ukim.mk.libraryapp.model.dto;

import lombok.Data;

@Data
public class AuthorDTO {
    Long id;
    String name;
    String surname;
    Long countryId;
}
