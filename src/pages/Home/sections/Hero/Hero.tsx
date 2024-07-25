import { Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { //<= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { //>= mobile
            paddingTop: "0"
        }
    }));

    const StyledImg = styled("img")(() => ({
        width: "75%",
        borderRadius: "50%",
        boxShadow: `0 0px 60px 1px ${theme.palette.primary.dark}`
    }));

    const handleDownloadClick = () => {
        // Adicione aqui a lógica para o download do CV
        alert('Download CV clicked');
    };

    const handleContactClick = () => {
        // Adicione aqui a lógica para o contato
        alert('Contact me clicked');
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={5} display="flex" justifyContent="center">
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={7} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography color="secondary.main" variant="h1" textAlign="center" pb={1}>Ali Mohamed</Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center">I'm a Full Stack Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleDownloadClick}>
                                        <DownloadIcon /><Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleContactClick}>
                                        <EmailIcon /><Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
}
export default Hero;
