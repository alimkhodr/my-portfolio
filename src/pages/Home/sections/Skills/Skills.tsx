import { Container, Grid, styled, Typography } from "@mui/material";
import { AkarIconsGithubFill, AkarIconsPythonFill, AkarIconsTypescriptFill, DeviconPlainCsharp, DeviconPlainCss3Wordmark, DeviconPlainDotnetcore, DeviconPlainHtml5Wordmark, Fa6BrandsJava, FluentMdl2ReactLogo, GraphUp, Scrum, SimpleIconsJavascript, SimpleIconsMysql, TablerSql } from "../../../../assets/Icons/Icons";
import theme from "../../../../theme";

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
        gap: "5px"
    }));

    return (
        <>
            <StyledSkills>
                <Container maxWidth="lg" >
                    <Typography variant="h2" textAlign="center">Skills</Typography>
                    <Grid container display="flex" justifyContent="center" pt={4} gap={2}>
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
                            <Fa6BrandsJava />
                            <Typography textAlign="center" fontWeight={"bold"}>Java</Typography>
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
                            <DeviconPlainHtml5Wordmark />
                            <Typography textAlign="center" fontWeight={"bold"}>HTML</Typography>
                        </StyledTech>
                        <StyledTech>
                            <DeviconPlainCss3Wordmark />
                            <Typography textAlign="center" fontWeight={"bold"}>CSS</Typography>
                        </StyledTech>
                        <StyledTech>
                            <AkarIconsGithubFill />
                            <Typography textAlign="center" fontWeight={"bold"}>GitHub</Typography>
                        </StyledTech>
                        <StyledTech>
                            <Scrum />
                            <Typography textAlign="center" fontWeight={"bold"}>Scrum</Typography>
                        </StyledTech>
                        <StyledTech>
                            <GraphUp />
                            <Typography textAlign="center" fontWeight={"bold"}>Melhoria contínua</Typography>
                        </StyledTech>
                    </Grid>
                </Container>
            </StyledSkills>
        </>
    )
}
export default Skills
