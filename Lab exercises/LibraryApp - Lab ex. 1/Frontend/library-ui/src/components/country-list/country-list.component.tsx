import React from 'react'
import { CountriesListContainer } from './country-list.styles'
import { ICountryListProps } from './country-list.props';
import { Country } from '../../models/Country';
import { Table, TableBody, TableColumn, TableHead, TableHeader, TableRow } from '../common/common.styles';
import { Text } from '../book-list/book-list.styles';

const CountriesList = (props: ICountryListProps) => {


    const Country = (id: number, country: Country) => {
        return (
            <TableRow key={id}>
                <TableColumn>{id}</TableColumn>
                <TableColumn>{country.name}</TableColumn>
                <TableColumn>{country.continent}</TableColumn>
            </TableRow>
        )
    }

    return (
        <CountriesListContainer>
            {props.countries.length > 0 && <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Country</TableHeader>
                        <TableHeader>Continent</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.countries.map((x, idx) => Country(idx, x))}
                </TableBody>
            </Table>}
            {props.countries.length == 0 && <Text>There's no countries.</Text>}
        </CountriesListContainer>
    );
}

export default CountriesList