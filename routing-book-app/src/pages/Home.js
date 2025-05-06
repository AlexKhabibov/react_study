import React from 'react';
import { Link } from 'react-router-dom';
import { books } from './booksDB';

const Home = () => {
    return (
        <div>
            <h1>Список книг</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;