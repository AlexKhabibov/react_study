function Greeting({ name = 'Alex', children }) {
    return (
        <h1>Hello {name}{children}</h1>
    );
}

export default Greeting;