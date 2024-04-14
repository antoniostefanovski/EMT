import { Country } from "./Country";

export interface Author {
    id: number;
    name: string;
    surname: string;
    country: Country;
}