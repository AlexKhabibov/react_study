import Comp2 from "./comp2";

function Comp1({name}) {
    return ( 
        <Comp2 name={name}/>
     );
}

export default Comp1;