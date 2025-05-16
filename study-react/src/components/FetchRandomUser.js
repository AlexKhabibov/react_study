import { useEffect, useState } from "react";

function FetchRandomUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => setUser(data.results[0]));
    }, []);

    if (!user) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>Загрузка случаного пользователя</h2>
            <h2>{user.name.first} {user.name.last}</h2>
            <img src={user.picture.medium} alt="Аватар" />
        </div >
    );
}

export default FetchRandomUser;