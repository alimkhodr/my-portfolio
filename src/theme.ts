import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#101010',
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