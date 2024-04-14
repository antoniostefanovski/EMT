import { AuthorsListContainer } from './authors-list.styles'
import { Author } from '../../models/Author'
import { TableRow, TableColumn, Table, TableBody, TableHead, TableHeader } from '../common/common.styles'
import { IAuthorsListProps } from './authors-list.props'
import { Text } from '../book-list/book-list.styles'

const AuthorsList = (props: IAuthorsListProps) => {
    const Author = (id: number, author: Author) => {
        return (
            <TableRow key={id}>
                <TableColumn>{id}</TableColumn>
                <TableColumn>{author.name} {author.surname}</TableColumn>
                <TableColumn>{author.country.name}</TableColumn>
            </TableRow>
        )
    }

    return (
        <AuthorsListContainer>
            {props.authors.length > 0 && <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Country</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.authors.map((x, idx) => Author(idx, x))}
                </TableBody>
            </Table>}
            {props.authors.length == 0 && <Text>There's no authors.</Text>}
        </AuthorsListContainer>
    )
}

export default AuthorsList