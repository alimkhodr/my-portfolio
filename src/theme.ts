import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#0057FF',
        },
        secondary: {
            main: '#000000',
        },
    },
    typography: {
        fontFamily: "Helvetica"
    }
});

theme = responsiveFontSizes(theme);

export default theme;