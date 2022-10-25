import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo, useState} from "react";
import ColorModeContext from "./ColorModeContext";
import App from "../../App";

const lightPalette = {
    primary: {
        main: '#020F2A'
    },
    secondary: {
        main: '#F40290'
    },
    tertiary: {
        main: '#A312A0'
    },
}
const darkPalette = {
    primary: {
        main: '#020F2A'
    },
    secondary: {
        main: '#F40290'
    },
    tertiary: {
        main: '#A312A0'
    },
}

const colorModeKey = "color-mode";

export default function ThemeHandler() {
    const localStorageValue = localStorage.getItem(colorModeKey)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(localStorageValue || (prefersDarkMode ? 'dark' : 'light'));

    localStorage.setItem(colorModeKey, mode);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((previousMode) => (previousMode === 'light') ? 'dark' : 'light');
        }
    }), []);
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light' ? lightPalette : darkPalette)
        },

    }), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}