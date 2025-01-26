import { newBooks } from "./newBooks";
import styled from 'styled-components';
import { Title } from '../Title';

const NewBooksSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    cursor: pointer;
    gap: 16px
`




function NewBooks() {
    return (
        <NewBooksSection>
            <Title
                color="#EB9B00"
                fontSize="36px">
                New Books
            </Title>
            <NewBooksContainer>
                {newBooks.map((book) => {
                return <img src={book.src} alt={book.name} />
            })}
            </NewBooksContainer>
            <div>
                <h3></h3>
                <h4></h4>
                <p></p>
                <img src="" alt="" />
                
            </div>
        </NewBooksSection>
    )
}

export default NewBooks;