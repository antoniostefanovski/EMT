import React, { useEffect, useState } from 'react'
import { CountriesContainer } from './countries.styles'
import CountriesList from '../../components/country-list/country-list.component'
import { Country } from '../../models/Country';
import { LibraryService } from '../../repository/LibraryService';

const Countries = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const service = LibraryService;

    useEffect(() => {
        getData();
        document.title = "Library App - Countries"
    }, []);

    const getData = async () => {
        return service.fetchCountries()
                        .then((data) => setCountries(data.data));
    }

    return (
        <CountriesContainer>
            <CountriesList countries={countries}/>
        </CountriesContainer>
    )
}

export default Countries