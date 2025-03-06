import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getBooks} from '../../services/books';
import { postFavorite } from '../../services/favorites';
import bookImg from '../../images/book.png';


const SearchContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        width: 100%;

`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`


const SubTitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid white;
    }

`


function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, []);

    async function fetchBooks() {
        const booksApi = await getBooks();
        setBooks(booksApi)
    }

    async function insertFavorite(id){
        await postFavorite(id);
        alert('Book added to favorites!')
    }



    return (
        <SearchContainer>
            <Title>Do you know where to start?</Title>
            <SubTitle>Find your book</SubTitle>
            <Input
                placeholder="Search here your book..."
                onBlur={event => {
                    const typedText = event.target.value.toLocaleLowerCase();
                    const resultSearch = books.filter(book => book.name?.toLocaleLowerCase().includes(typedText));
                    setSearchedBooks(resultSearch)
                }}
            />
            {searchedBooks.map(book => (
                console.log(book),
                <Result onClick={() => insertFavorite(book.id)}>  
                    <img src={bookImg} alt={book.name} key={book.id} />
                    <p>{book.name}</p>

                </Result>
            ))}

        </SearchContainer>
    );
}

export default Search;