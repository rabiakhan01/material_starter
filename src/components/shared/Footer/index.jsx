import { Box, CssBaseline, Divider, List, ListItem, Typography } from "@mui/material"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { lightBlackColor, secondaryColor, textGrayColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors"
import images from "../../../assets/images/images";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: lightBlackColor, px: 20, pt: 6, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '50%' }}>
                    <Box sx={{ bgcolor: 'white', bgcolor: lightBlackColor, pb: 3, cursor: 'pointer' }}>
                        <img src={images.logo} alt="" style={{ height: 42, width: 160 }} />
                    </Box>
                    <Typography sx={{ color: textGrayColor, fontSize: 13, width: '20rem' }}>Not just a storage unit, an investment. RV & Boat Storage & Investing in storage units at Luxelocker.</Typography>
                </Box>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography sx={{ color: textGrayColor, fontSize: 14, fontWeight: 600 }}>NAVIGATION</Typography>
                        <List>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Home</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Locations</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Blog</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Contact</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Meet The Team</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>FAQ</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Tenant Improvement</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{ color: textGrayColor, fontSize: 14, fontWeight: 600 }}>LOCATIONS</Typography>
                        <List>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Henerson, NV</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Spanish Springs, NV</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Richland, WA</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Boise, ID</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Phoenix, AZ</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Lake Havaasu, AZ</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{ color: textGrayColor, fontSize: 14, fontWeight: 600 }}>SOCIALS</Typography>
                        <List>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Facebook</ListItem>
                            <ListItem sx={{ p: 0.2, fontSize: 13, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Instragram</ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ bgcolor: textGrayColor, mt: 5 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, pb: 3 }}>
                <Typography sx={{ color: textGrayColor, fontSize: 13, fontWeight: 500 }}>©2024 All rights reserved</Typography>
                <Typography sx={{ color: textGrayColor, fontSize: 13, fontWeight: 500 }}><Typography sx={{ cursor: 'pointer', fontSize: 13, fontWeight: 500, ":hover": { color: textSecondaryColor } }} component="span"> Privacy Policy</Typography>  License Agreement</Typography>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                    <FacebookRoundedIcon sx={{ color: textGrayColor, height: 20, width: 20 }} />
                    <InstagramIcon sx={{ color: textGrayColor, height: 20, width: 20 }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;