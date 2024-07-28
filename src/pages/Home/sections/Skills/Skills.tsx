import { Container, Grid, styled, Typography } from "@mui/material";
import { AkarIconsPythonFill, AkarIconsTypescriptFill, DeviconPlainCsharp, DeviconPlainCss3Wordmark, DeviconPlainDotnetcore, DeviconPlainHtml5Wordmark, Fa6BrandsJava, FluentMdl2ReactLogo, Scrum, SimpleIconsJavascript, SimpleIconsMysql, TablerSql } from "../../../../assets/Icons/Icons";
import theme from "../../../../theme";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BoltIcon from '@mui/icons-material/Bolt';
import { EmojiEmotions, EventNote, Favorite, Lightbulb, SelfImprovement } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        paddingBottom: "50px",
        paddingTop: "50px",
        color: `${theme.palette.primary.contrastText}`
    }));

    const StyledTech = styled("div")(() => ({
        borderRadius: "10px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        padding: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: "5px",
        transition: "background-color 0.3s ease, transform 0.3s ease, border 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            transform: "scale(1.05)",
            border: "none",
        },
    }));

    return (
        <>
            <StyledSkills>
                <Container maxWidth="lg" >
                    <Typography variant="h2" textAlign="center">Skills</Typography>
                    <Grid container display="flex" justifyContent="center" pt={4} gap={2}>
                        <Typography textAlign="center" p={1}>Technical Skills</Typography>
                        <Grid container display="flex" justifyContent="center" gap={2}>
                            <StyledTech>
                                <DeviconPlainCsharp />
                                <Typography textAlign="center" fontWeight={"bold"}>C#</Typography>
                            </StyledTech>
                            <StyledTech>
                                <DeviconPlainDotnetcore />
                                <Typography textAlign="center" fontWeight={"bold"}>.NET</Typography>
                            </StyledTech>
                            <StyledTech>
                                <FluentMdl2ReactLogo />
                                <Typography textAlign="center" fontWeight={"bold"}>React</Typography>
                            </StyledTech>
                            <StyledTech>
                                <SimpleIconsJavascript />
                                <Typography textAlign="center" fontWeight={"bold"}>JavaScript</Typography>
                            </StyledTech>
                            <StyledTech>
                                <AkarIconsTypescriptFill />
                                <Typography textAlign="center" fontWeight={"bold"}>TypeScript</Typography>
                            </StyledTech>
                            <StyledTech>
                                <TablerSql />
                                <Typography textAlign="center" fontWeight={"bold"}>SQL</Typography>
                            </StyledTech>
                            <StyledTech>
                                <SimpleIconsMysql />
                                <Typography textAlign="center" fontWeight={"bold"}>MySQL</Typography>
                            </StyledTech>
                            <StyledTech>
                                <AkarIconsPythonFill />
                                <Typography textAlign="center" fontWeight={"bold"}>Python</Typography>
                            </StyledTech>
                            <StyledTech>
                                <Fa6BrandsJava />
                                <Typography textAlign="center" fontWeight={"bold"}>Java</Typography>
                            </StyledTech>
                            <StyledTech>
                                <DeviconPlainHtml5Wordmark />
                                <Typography textAlign="center" fontWeight={"bold"}>HTML</Typography>
                            </StyledTech>
                            <StyledTech>
                                <DeviconPlainCss3Wordmark />
                                <Typography textAlign="center" fontWeight={"bold"}>CSS</Typography>
                            </StyledTech>
                            <StyledTech>
                                <GitHubIcon />
                                <Typography textAlign="center" fontWeight={"bold"}>GitHub</Typography>
                            </StyledTech>
                            <StyledTech>
                                <Scrum />
                                <Typography textAlign="center" fontWeight={"bold"}>Scrum</Typography>
                            </StyledTech>
                        </Grid>
                        <Typography textAlign="center" p={1}>Soft Skills</Typography>
                        <Grid container display="flex" justifyContent="center" gap={2}>
                            <StyledTech>
                                <TrendingUpIcon />
                                <Typography textAlign="center" fontWeight={"bold"}>Continuous Improvement</Typography>
                            </StyledTech>
                            <StyledTech>
                                <BoltIcon />
                                <Typography textAlign="center" fontWeight={"bold"}>Proactivity</Typography>
                            </StyledTech>
                            <StyledTech>
                                <Favorite />
                                <Typography textAlign="center" fontWeight={"bold"}>Empathy</Typography>
                            </StyledTech>
                            <StyledTech>
                                <EmojiEmotions />
                                <Typography textAlign="center" fontWeight={"bold"}>Emotional Intelligence</Typography>
                            </StyledTech>
                            <StyledTech>
                                <EventNote />
                                <Typography textAlign="center" fontWeight={"bold"}>Organization and Planning</Typography>
                            </StyledTech>
                            <StyledTech>
                                <SelfImprovement />
                                <Typography textAlign="center" fontWeight={"bold"}>Resilience</Typography>
                            </StyledTech>
                            <StyledTech>
                                <Lightbulb />
                                <Typography textAlign="center" fontWeight={"bold"}>Creativity</Typography>
                            </StyledTech>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSkills>
        </>
    )
}
export default Skills
