import { AppBar, Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import images from "../../../assets/images/images";
import { primaryColor, secondaryColor, textBlackColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors";

const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 20, py: 0.8, position: 'sticky', top: '0', bgcolor: primaryColor }}>
            <Box sx={{ bgcolor: 'white', bgcolor: primaryColor }}>
                <img src={images.logo} alt="" style={{ height: 42, width: 160 }} />
            </Box>
            <Box>
                <List sx={{ display: 'flex', color: textSecondaryColor, fontSize: 17, fontWeight: 600 }}>
                    <ListItem>Home</ListItem>
                    <ListItem>Locations</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem sx={{ textWrap: 'nowrap' }}>About Us</ListItem>
                </List>
            </Box>
            <Box>
                <Button variant="contained" sx={{ textTransform: 'none', bgcolor: secondaryColor, color: textBlackColor, py: 1.2, px: 2.7, borderRadius: 2 }}>Rent or Buy</Button>
            </Box>
        </Box>
    )
}

export default Navbar;