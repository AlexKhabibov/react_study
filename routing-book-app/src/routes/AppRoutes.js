import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BookDetailPage from '../pages/BookDetailPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;