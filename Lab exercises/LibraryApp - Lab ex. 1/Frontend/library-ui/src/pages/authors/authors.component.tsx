import React, { useEffect, useState } from 'react'
import { AuthorsContainer } from './authors.styles'
import { Author } from '../../models/Author';
import AuthorsList from '../../components/authors-list/authors-list.component';
import { LibraryService } from '../../repository/LibraryService';

const Authors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const service = LibraryService;

    useEffect(() => {
        getData();
        document.title = "Library App - Authors"
    }, []);

    const getData = async () => {
        return service.fetchAuthors()
                        .then((data) => setAuthors(data.data));
    }

    return (
        <AuthorsContainer>
            <AuthorsList authors={authors} />
        </AuthorsContainer>
    )
}

export default Authors