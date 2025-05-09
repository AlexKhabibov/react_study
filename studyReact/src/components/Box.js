function Box({ children, style }) {
    return (
        <div style={{ ...style }}>{children}</div>
    );
}

export default Box;