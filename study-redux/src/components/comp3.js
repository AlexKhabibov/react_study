import { useContext } from "react";
import NameContext from "./context";

function Comp3() {
    const name = useContext(NameContext)
    
    return (
        <>
            <div style={{ color: 'red' }}>{name}</div>
        </>
    );
}

export default Comp3;