import { listArr } from "./ListPageDB";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPageDetail from "./ListPageDetail";
import ListPage from "./ListPage";
import ListPageNotFound from "./ListPageNotFound";

function ListPageMain() {
    return (
        <BrowserRouter>
            <h1>Для Просмотра товаров перейдите на /items</h1>
            <Routes>
                <Route path="/items" element={<ListPage list={listArr}/>} />
                <Route path="/items/:id" element={<ListPageDetail list={listArr}/>} />
                <Route path="/*/" element={<ListPageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ListPageMain;