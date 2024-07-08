import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Navbar(props) {

    const navItems = ['Home', 'About', 'Contact', 'Gallery'];
    const handelClick = () => {

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar sx={{ bgcolor: 'pink' }}>
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={handelClick}>
                        MUI
                    </Typography>
                    <Divider />
                    <List component="div">
                        <ListItem>
                            {
                                navItems.map((item) => (
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item} onChange={handelClick} />
                                    </ListItemButton>
                                ))
                            }
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
