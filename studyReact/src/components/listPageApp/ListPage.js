import React from 'react';
import { Link } from 'react-router-dom';

function ListPage({ list }) {
    return (
        <>
            <h1>Список Товаров</h1>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <Link to={`/items/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListPage;