package finki.ukim.mk.libraryapp.web;

import finki.ukim.mk.libraryapp.model.Country;
import finki.ukim.mk.libraryapp.model.dto.CountryDTO;
import finki.ukim.mk.libraryapp.service.CountryService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountryController {
    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @PostMapping("/add-country")
    public ResponseEntity<Void> addCountry(@RequestBody CountryDTO countryDTO) {
        if(countryDTO == null) {
            return ResponseEntity.notFound().build();
        }

        this.service.create(countryDTO.getName(), countryDTO.getContinent());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        var countries = this.service.listAll();

        return ResponseEntity.ok(countries);
    }
}
