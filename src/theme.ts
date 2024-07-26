import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#0a0a0a',
        },
        secondary: {
            main: '#0057FF',
        },
    },
    typography: {
        fontFamily: "Helvetica"
    }
});

theme = responsiveFontSizes(theme);

export default theme;