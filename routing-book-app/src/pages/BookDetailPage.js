import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from './booksDB';

const BookDetailPage = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return <h2>Книга не найдена</h2>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetailPage;