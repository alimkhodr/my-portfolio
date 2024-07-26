import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import theme from "../../theme";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.dark
    }));

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }}>About</MenuItem>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }}>Skills</MenuItem>
                        <MenuItem sx={{ display: { xs: 'none', md: 'block' } }}>Projects</MenuItem>
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </StyledToolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { backgroundColor: theme.palette.secondary.dark, color: 'white' } }}
            >
                <List >
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Projects" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;
