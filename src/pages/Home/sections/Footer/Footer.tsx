import { Container, Grid, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledFooter = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
}));

const IconLink = styled("a")(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
  backgroundColor: "tranparent",
  borderRadius: "10px",
  padding: "5px",
  display: "flex",

  transition: 'transform 0.5s, color 0.5s, background-color 0.5s',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'scale(1.1)',
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container color={"primary.contrastText"} display="flex" justifyContent="space-evenly">
          <IconLink href="https://www.linkedin.com/in/alimohamedkhodr/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconLink>
          <IconLink href="https://wa.me/12988594305" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize="large" />
          </IconLink>
          <IconLink href="https://github.com/alimkhodr" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </IconLink>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
