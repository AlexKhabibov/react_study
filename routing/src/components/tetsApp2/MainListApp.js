import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListDetailPage from './ListDetailPage';
import ListNotFoundPage from './ListNotFoundPage';
import ListAboutPage from './ListAboutPage';
import { productsList } from './ListDB';
import ListMainPage from './ListMainPage';

function MainListApp() {
    return (
        <BrowserRouter>
            <h1>Список товаров</h1>
            <Routes>
                <Route path='/products/:id' element={<ListDetailPage productsList={productsList} />} />
                <Route path='/products/' element={<ListMainPage productsList={productsList} />} />
                <Route path='/products/about' element={<ListAboutPage />} />
                <Route path='*' element={<ListNotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainListApp;