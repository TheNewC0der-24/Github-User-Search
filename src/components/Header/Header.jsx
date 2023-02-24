import React, { useState } from 'react';

import { useLocation, useNavigate } from "react-router-dom";

// Material Components
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';

// Material Styles
import { makeStyles } from "@mui/styles";

// PropTypes
import PropTypes from 'prop-types';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImGithub } from 'react-icons/im';

const drawerWidth = 240;
const navItems = [
    { label: "Search User", link: "/search" }
];

const useStyles = makeStyles({
    mobileLinkActive: {
        backgroundColor: "#dee2e6",
        // borderRight: "5px solid #0d1117",
        color: "#0d1117",
    },

    link: {
        color: "#0d1117",
        cursor: "pointer",
    },

    linkActive: {
        borderBottom: "3px solid #dee2e6",
        color: "#dee2e6",
        cursor: "pointer",
    },
});
function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const classes = useStyles();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleDrawerClose = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "#0d1117", color: "#dee2e6" }}>
            <ImGithub style={{ marginTop: "1.5rem" }} size={40} />
            <Typography variant="h6" sx={{ my: 2 }}>
                GitHub User Search
            </Typography>
            <Divider sx={{ backgroundColor: "#8b949e" }} />
            <List>
                {navItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        className={
                            location.pathname === item.link ? classes.mobileLinkActive : null
                        }
                        onClick={() => {
                            navigate(item.link);
                            handleDrawerToggle(item.link);
                            handleDrawerClose(false);
                        }}
                    >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "#161b22", color: "#dee2e6", padding: "1rem" }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <ImGithub size={30} />
                            <Typography variant="h6">
                                GitHub User Search
                            </Typography>

                        </Box>
                        <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                            <Typography variant="subtitle1" sx={{ color: "#939393" }}>
                                Browse users and their profiles via <Link href="https://docs.github.com/en/rest" target="_blank" underline="hover">
                                    the GitHub API
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <GiHamburgerMenu />
                        </IconButton>
                    </Box>

                    <Box sx={{
                        display: { xs: "none", sm: "none", md: "flex" },
                        gap: "1rem",
                        justifyContent: "end",
                        marginLeft: "auto",
                    }}>
                        {navItems.map((item, index) => (
                            <Typography key={index}
                                className={
                                    location.pathname === item.link
                                        ? classes.linkActive
                                        : classes.link
                                }
                                onClick={() => navigate(item.link)}
                                sx={{ color: '#dee2e6' }}>
                                {item.label}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ backgroundColor: "#161b22", color: "#dee2e6" }}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#0d1117", color: "#dee2e6" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;