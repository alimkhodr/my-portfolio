
import { Container, Grid, styled, Typography } from "@mui/material";
import CardProjects from "../../../../components/CardProject/CardProject";
import { fetchRepositories } from "../../../../services/githubService";
import { Repository } from "../../../../types/github";
import { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        const getRepos = async () => {
            const repositories = await fetchRepositories();
            setRepos(repositories);
        };

        getRepos();
    }, []);

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
        margin: "0 10px"
    }));

    return (
        <StyledProjects>
        <Container maxWidth="lg">
            <Typography color="primary.main" variant="h2" textAlign="center">Projects</Typography>
            <Grid container spacing={5} justifyContent="center" pt={4}>
                {repos.map((repo: Repository) => (
                    <Grid item xs={12} sm={6} md={5} key={repo.id}>
                        <CardProjects 
                            title={repo.name}
                            date={new Date(repo.created_at).toLocaleDateString()}
                            description={repo.description || 'No description provided'}
                            link={repo.html_url}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </StyledProjects>
    );
}

export default Projects;
