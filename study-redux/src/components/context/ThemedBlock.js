import { useContext } from "react";
import ThemeContext from "./themeContext";

function ThemedBlock() {
    const theme = useContext(ThemeContext);

    return (
        <div style={{ background: theme.background, color: theme.color }}>Блок Информации</div>
    );
}

export default ThemedBlock;