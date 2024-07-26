import { Container, Grid, keyframes, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

// Animações
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: ${theme.palette.primary.contrastText};
  }
`;

const TypingText = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: `3px solid ${theme.palette.primary.contrastText}`,
    animation: `${typing} 2s steps(30, end), ${blinkCaret} 0.45s step-end infinite`,
}));


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: `${theme.palette.primary.main}`,
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
        window.open('https://drive.google.com/uc?export=download&id=1-Qasqgp78geDiTKdT3LScUGayjusZ8_Q', '_blank');
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:ali.m.khodr@gmail.com';
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
                            <Typography color="secondary.main" variant="h1" textAlign="center">Ali Mohamed</Typography>
                            <TypingText color="primary.contrastText" variant="h4" textAlign="center">
                                I'm a Full Stack Developer
                            </TypingText>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={4}>
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
