"use client"

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


export default function useToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext)

    function toggle() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        document.documentElement.classList.remove(theme)
        document.documentElement.classList.add(newTheme)
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return toggle

}