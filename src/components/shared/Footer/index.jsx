import { Box, createTheme, CssBaseline, Divider, List, ListItem, Typography } from "@mui/material"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { lightBlackColor, secondaryColor, textGrayColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors"
import images from "../../../assets/images/images";

const Footer = () => {

    return (
        <Box sx={{ bgcolor: lightBlackColor, pt: 6, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1145px', justifyContent: 'space-between', alignItems: 'center', px: 2, mx: { lg: 'auto' } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', width: '100%', gap: { xs: 8, md: 0 } }}>
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Box sx={{ bgcolor: 'white', bgcolor: lightBlackColor, pb: 3, cursor: 'pointer' }}>
                            <img src={images.logo} alt="" style={{ height: 42, width: 160 }} />
                        </Box>
                        <Typography sx={{ color: textGrayColor, fontSize: 13, width: { xs: '100%', md: '20rem' } }}>Not just a storage unit, an investment. RV & Boat Storage & Investing in storage units at Luxelocker.</Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '80%', md: '50%' }, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box sx={{ width: { xs: '50%', sm: 'auto' } }}>
                            <Typography sx={{ color: textGrayColor, fontSize: { xs: 13, md: 14 }, fontWeight: 600 }}>NAVIGATION</Typography>
                            <List>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Home</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Locations</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Blog</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Contact</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Meet The Team</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>FAQ</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Tenant Improvement</ListItem>
                            </List>
                        </Box>
                        <Box sx={{ width: { xs: '50%', sm: 'auto' } }}>
                            <Typography sx={{ color: textGrayColor, fontSize: { xs: 13, md: 14 }, fontWeight: 600 }}>LOCATIONS</Typography>
                            <List>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Henerson, NV</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Spanish Springs, NV</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Richland, WA</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Boise, ID</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Phoenix, AZ</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Lake Havaasu, AZ</ListItem>
                            </List>
                        </Box>
                        <Box sx={{ width: { xs: '100%', sm: 'auto' }, pt: { xs: 4, sm: 0 } }}>
                            <Typography sx={{ color: textGrayColor, fontSize: { xs: 13, md: 14 }, fontWeight: 600 }}>SOCIALS</Typography>
                            <List>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Facebook</ListItem>
                                <ListItem sx={{ p: 0.2, fontSize: { xs: 12, md: 13 }, fontWeight: 500, color: textPrimaryColor, cursor: 'pointer' }}>Instragram</ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ bgcolor: textGrayColor, width: '100%', mt: 5 }} ></Divider>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 4, sm: 0 }, alignItems: { xs: 'center', sm: '' }, justifyContent: 'space-between', pt: 2, pb: 3, width: '100%' }}>
                    <Typography sx={{ color: textGrayColor, fontSize: { xs: 12, md: 13 }, fontWeight: 500 }}>©2024 All rights reserved</Typography>
                    <Typography sx={{ color: textGrayColor, fontSize: { xs: 12, md: 13 }, fontWeight: 500 }}><Typography sx={{ cursor: 'pointer', fontSize: 13, fontWeight: 500, ":hover": { color: textSecondaryColor } }} component="span"> Privacy Policy</Typography>  License Agreement</Typography>
                    <Box sx={{ display: 'flex', gap: 2.5 }}>
                        <FacebookRoundedIcon sx={{ color: textGrayColor, height: 20, width: 20 }} />
                        <InstagramIcon sx={{ color: textGrayColor, height: 20, width: 20 }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;