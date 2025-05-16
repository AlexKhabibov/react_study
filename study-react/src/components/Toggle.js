import { useState } from "react";

function Toggle({ children }) {
    const [isOn, setIsOn] = useState(false);

    return children({ isOn, toggle: () => setIsOn(!isOn) });
}

export default Toggle;