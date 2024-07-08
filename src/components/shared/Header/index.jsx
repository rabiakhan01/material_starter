import { Box, Icon, Typography } from "@mui/material"
import { lightBlackColor, secondaryColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors"
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';


const Header = () => {
    return (
        <Box component="header" sx={{ height: 48, bgcolor: lightBlackColor, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 20 }}>
            <Box sx={{ display: 'flex', gap: 6 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }} >
                    <PhoneIcon sx={{ color: secondaryColor, height: 20, width: 20 }} />
                    <Typography sx={{ color: textSecondaryColor, fontSize: 13 }}>
                        833-333-5893
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <EmailIcon sx={{ color: secondaryColor, height: 20, width: 20 }} />
                    <Typography sx={{ color: textSecondaryColor, fontSize: 13 }}>
                        info@luxelocker.com
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <LocationOnIcon sx={{ color: secondaryColor, height: 20, width: 20 }} />
                    <Typography sx={{ color: textSecondaryColor, fontSize: 13 }}>
                        349 Lake Havasu Ave S. Suite 106. Lake Havasu City, AZ 86403
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2.5 }}>
                <FacebookRoundedIcon sx={{ color: secondaryColor, height: 20, width: 20 }} />
                <InstagramIcon sx={{ color: secondaryColor, height: 20, width: 20 }} />
            </Box>
        </Box>
    )
}

export default Header;