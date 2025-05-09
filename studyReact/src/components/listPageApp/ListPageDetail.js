import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ListPageDetail({ list }) {
    const { id } = useParams();
    const item = list.find(item => item.id === parseInt(id))

    if (!item) {
        return <h1>Товар не найден</h1>
    }

    return (
        <>
            <h2>{item.name}</h2>
            <p>{item.content}</p>
            <Link to="/items">Вернуться к списку</Link>
        </>
    );
}

export default ListPageDetail;