import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList';
import About from './About';

const articles = [
    { id: 1, title: 'Статья 1', content: 'Инофрмация для содержиомго статьи 1' },
    { id: 2, title: 'Статья 2', content: 'Инофрмация для содержиомго статьи 2' },
    { id: 3, title: 'Статья 3', content: 'Инофрмация для содержиомго статьи 3' },
];


function Main() {
    return (
        <BrowserRouter>
            <div>
                <h1>Приложение для просмотра статей</h1>
                <Routes>
                    <Route path='/articles/:id' element={<ArticleDetail articles={articles} />} />
                    <Route path='/about/' element={<About />} />
                    <Route path='*' element={<ArticleList articles={articles} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Main;