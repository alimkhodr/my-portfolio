import { Container, Grid, styled, Typography, Tooltip } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
        margin: "0 10px"
    }));

    const StyledCard = styled("div")(() => ({
        borderRadius: "10px",
        border: "1px solid",
        width: "100%",
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    }));

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg" >
                    <Typography color="primary.main" variant="h2" textAlign="center">About me</Typography>
                    <Grid container display="flex" justifyContent="center" spacing={2} pt={4} pb={4}>
                        <Grid item xs={8} md={3} display="flex" justifyContent="center">
                            <StyledCard>
                                <WorkspacePremiumIcon />
                                <Typography color="primary.main" textAlign="center" fontWeight={"bold"}>Experience</Typography>
                                <Typography color="primary.main" textAlign="center">
                                    +1 year at
                                    <a href="https://www.aptiv.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <span> APTIV </span>
                                    </a>
                                    (Intern)
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={8} md={3} display="flex" justifyContent="center">
                            <StyledCard>
                                <SchoolIcon />
                                <Typography color="primary.main" textAlign="center" fontWeight={"bold"}>Education</Typography>
                                <Typography color="primary.main" textAlign="center">
                                    4/6 at FATEC
                                    <Tooltip title="Banco de Dados">
                                        <span> (BD)</span>
                                    </Tooltip>
                                </Typography>
                                <Typography color="primary.main" textAlign="center">
                                    5/10 at UNIVAP
                                    <Tooltip title="Análise e Desenvolvimento de Sistemas">
                                        <span> (ADS)</span>
                                    </Tooltip>
                                </Typography>
                            </StyledCard>
                        </Grid>
                    </Grid>
                    <Typography color="primary.main" textAlign="justify">
                        I began my journey as a developer during high school, where I took a technical course in Systems Development. After graduating, I enrolled in the morning program of the Systems Analysis and Development course at Fatec. In the third semester, I switched to the evening Database course, allowing me to balance my studies with an internship in the field and gain practical experience early on.
                    </Typography>
                </Container>
            </StyledAbout>
        </>
    )
}
export default About;
