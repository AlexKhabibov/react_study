import React from 'react';
import { Link } from 'react-router-dom';

function ListMainPage({ productsList }) {

    return (
        <>
            <h2>Спсок товаров</h2>
            <ul>
                {productsList.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListMainPage;