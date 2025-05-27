function Loading({ isLoading }) {
    return (
        <>
            {isLoading && <h2>Загрузка</h2>}
            {!isLoading && <h2>Загрузка завершена</h2>}
        </>
    );
}

export default Loading;