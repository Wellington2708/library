import { newBooks } from "./newBooks";
import styled from 'styled-components';
import { Title } from '../Title';
import RecommendedCard from '../RecommendedCard/index';
import bookRecommendation from '../../images/book.png';

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
            <RecommendedCard 
                title="You might be interested in"
                subtitle="Liderança e Design"
                description="Habilidades de gestão para alavancar sua carreira"
                image={bookRecommendation}
                alt="Building an application with the Google Platform"
            />
        </NewBooksSection>
    )
}

export default NewBooks;