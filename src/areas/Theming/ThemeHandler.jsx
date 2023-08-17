import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo, useState} from "react";
import ColorModeContext from "./ColorModeContext";
import App from "../../App";
import GA from "../../data/google-analytics";

const lightPalette = {
    primary: {
        main: '#00968D'
    },
    secondary: {
        main: '#7ee0d5'
    },
    tertiary: {
        main: '#FE9E2F'
    },
    background: {
        default: '#FAFAFA'
    }
}
const darkPalette = {
    primary: {
        main: '#00968D'
    },
    secondary: {
        main: '#7ee0d5'
    },
    tertiary: {
        main: '#FE9E2F'
    }
}

const colorModeKey = "color-mode";

export default function ThemeHandler() {
    const localStorageValue = localStorage.getItem(colorModeKey)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(localStorageValue || (prefersDarkMode ? 'dark' : 'light'));

    localStorage.setItem(colorModeKey, mode);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((previousMode) => {
                const newMode = (previousMode === 'light') ? 'dark' : 'light'

                GA.trackChangeColorMode(newMode);

                return newMode;
            });
        }
    }), []);
    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: [
                'Poppins'
            ].join(",")
        },
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