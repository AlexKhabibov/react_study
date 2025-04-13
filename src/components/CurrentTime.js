function CurrentTime() {
    
    return ( 
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Текущее время: {new Date().toLocaleTimeString()}</h2>
     );
}

export default CurrentTime;