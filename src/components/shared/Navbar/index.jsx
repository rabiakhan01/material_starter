import { Box, Button, darken, List, ListItem, } from "@mui/material";
import images from "../../../assets/images/images";
import { primaryColor, secondaryColor, textBlackColor, textSecondaryColor } from "../../../utils/styles/colors";

const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 20, py: 1.5, position: 'sticky', top: '0', bgcolor: primaryColor, zIndex: 20 }}>
            <Box sx={{ bgcolor: 'white', bgcolor: primaryColor, cursor: 'pointer' }}>
                <img src={images.logo} alt="" style={{ height: 42, width: 160 }} />
            </Box>
            <Box>
                <List sx={{ display: 'flex', gap: 3, color: textSecondaryColor, fontSize: 15, fontWeight: 600 }}>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Home</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Locations</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Blog</ListItem>
                    <ListItem sx={{ cursor: 'pointer', p: 0 }}>Contact</ListItem>
                    <ListItem sx={{ textWrap: 'nowrap', p: 0, cursor: 'pointer' }}>About Us</ListItem>
                </List>
            </Box>
            <Box>
                <Button variant="contained" sx={{ textTransform: 'none', bgcolor: secondaryColor, color: textBlackColor, py: 1.2, px: 2.7, borderRadius: 2, '&:hover': { bgcolor: darken(secondaryColor, 0.28) } }}>Rent or Buy</Button>
            </Box>
        </Box>
    )
}

export default Navbar;