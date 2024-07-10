import React, { useState } from "react";
import { Box, Button, darken, lighten, List, ListItem, Menu, Popover, Typography, } from "@mui/material";
import images from "../../../assets/images/images";
import MenuIcon from '@mui/icons-material/Menu';
import { lightBlackColor, primaryColor, secondaryColor, textBlackColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, position: 'sticky', top: '0', bgcolor: primaryColor, zIndex: 20 }}>
            <Box sx={{ bgcolor: 'white', bgcolor: primaryColor, cursor: 'pointer' }}>
                <img src={images.logo} alt="" style={{ height: 42, width: 160 }} />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <List sx={{ display: 'flex', gap: 3, color: textSecondaryColor, fontSize: 15, fontWeight: 600 }}>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Home</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Locations</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Blog</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Contact</ListItem>
                    <ListItem sx={{ textWrap: 'nowrap', p: 0, cursor: 'pointer' }}>
                        <Typography component="span" onClick={handleClick} fontSize={15} fontWeight={500} color={textSecondaryColor}>About Us</Typography>
                        <KeyboardArrowDownIcon sx={{ transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <List sx={{ bgcolor: lightBlackColor, width: 220, py: 2.2, px: 0.5 }}>
                                <ListItem sx={{ color: textPrimaryColor, fontWeight: 500, pb: 0.7, px: 3, cursor: 'pointer' }}>Meet The Team</ListItem>
                                <ListItem sx={{ color: textPrimaryColor, fontWeight: 500, pb: 0.7, px: 3, cursor: 'pointer' }}>Corporate Governance</ListItem>
                            </List>
                        </Popover>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Button variant="contained" sx={{ textTransform: 'none', bgcolor: secondaryColor, color: textBlackColor, py: 1.2, px: 2.7, borderRadius: 2, '&:hover': { bgcolor: darken(secondaryColor, 0.28) }, display: { xs: 'none', md: 'flex' } }}>Rent or Buy</Button>
                <MenuIcon sx={{ display: { xs: 'show', md: 'none' }, color: 'white' }} />
            </Box>
        </Box>
    )
}

export default Navbar;