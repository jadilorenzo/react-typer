import React from "react"
import {ThemeContextConsumer} from "./ThemeContextProvider"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} className={`${theme}-theme-button`}>{props.children}</button>
            )}
        </ThemeContextConsumer>
    )
}

export default Button
