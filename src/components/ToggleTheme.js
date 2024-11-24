import { useSelector, useDispatch } from "react-redux";
import React from "react";
import classes from "./ToggleTheme.module.css"

function ToggleTheme() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }

    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h1>
                Текущая тема: <span style={{ color: 'DarkRed', fontSize: '62px' }}>{theme}</span></h1>
            <button onClick={toggleTheme} style={{ padding: '32px', borderRadius: "18px", backgroundColor: theme === 'light' ? 'black' : 'white' }}> <span style={{ color: 'Red' }}>Поменять тему {theme === 'light' ? 'dark' : 'light'}</span></button>
        </div >
    );
}
export default ToggleTheme;