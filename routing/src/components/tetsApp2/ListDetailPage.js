import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ListDetailPage({ productsList }) {

    const { id } = useParams();
    const product = productsList.find(product => product.id === parseInt(id));

    if (!product) {
        <p>Товар не найден</p>
    }

    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <Link to="/products">Вернуться к списку</Link>
        </>
    );
}

export default ListDetailPage;