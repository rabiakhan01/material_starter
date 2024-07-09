import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Header from "../../components/shared/Header";
import Navbar from "../../components/shared/Navbar";
import images from "../../assets/images/images";
import { textPrimaryColor, textSecondaryColor } from "../../utils/styles/colors";
import Form from '../../components/TenantImprovement/Form';
import Footer from "../../components/shared/Footer";

const TenantImprovement = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Header />
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 20, gap: 6, pb: 6 }}>
                <Box sx={{ textAlign: 'center', pt: 1 }}>
                    <Typography sx={{ color: textPrimaryColor, fontSize: 40 }}>Tenant Improvement Request</Typography>
                </Box>
                <Box sx={{ height: '34rem', overflow: 'hidden', borderRadius: 5 }}>
                    <img src={images.cover_image} alt="" className="object-cover" />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: 20 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h1" sx={{ color: textSecondaryColor, fontSize: 25 }}>Why Sumbit Improvement</Typography>
                    <Box sx={{ py: 3.5, display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                        <Typography sx={{ color: textPrimaryColor }}>Submitting improvements ensures compliance with community
                            standards and safety regulations. This process maintains property value,
                            enhances aesthetics, and ensures that all modifications are safe and approved
                            by the Design Review Committee. </Typography>
                        <Typography sx={{ color: textPrimaryColor }}>If you would like to submit a tenant improvement,please submit the form for review.</Typography>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pb: 1 }}>
                    <Typography component="h1" sx={{ color: textSecondaryColor, fontSize: 23 }} >DESIGN REVIEW APPLICATION FORM AND CHECKLISTS</Typography>
                    <Typography sx={{ color: textSecondaryColor }}>Please direct any questions about a submittal to Design Review Committee (DRC).</Typography>
                    <Typography sx={{ color: textPrimaryColor, pt: 2 }}>
                        Owners shall not rely on verbal approvals or indications from any person
                        that Improvements will be approved by the DRC. The DRC shall attempt to
                        either approve or disapprove in writing each complete request within 14
                        days after receipt of the complete request. If no notice is sent by the
                        DRC within the 14 days, then the proposed Improvement is deemed disapproved.
                        If a request is denied within such 14 day period, then written denial shall
                        be forwarded to the Owner stating the reason for denial. If the DRC requests
                        additional information, then the 14 day period will not commence until all
                        required information has been submitted. It is an Owner’s responsibility
                        to make sure that a request and all additional information required for
                        submittal is received by the DRC.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography component="h1" sx={{ color: textSecondaryColor, fontSize: 23, textDecoration: 'underline' }}>SUBMITTAL CHECKLIST</Typography>
                    <Typography sx={{ color: textPrimaryColor }}>A checklist of required submittal items is below for reference
                        but is not a comprehensive list of submittal requirements.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h1" sx={{ color: textSecondaryColor, fontSize: 23 }}>PRELIMINARY AND FINAL DESIGN SUBMISSIONS</Typography>
                    <List component="nav" sx={{ color: textPrimaryColor, listStyleType: 'disc', pl: 2, display: 'flex', flexDirection: 'column' }}>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Any applicable completed form(s) signed by Owner</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Floor plans</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Proposed improvement plans</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Full engineered construction documents (Final Design Submission)</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Specifications for all finishes, equipment, fixtures, etc. (Final Design Submission)</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Materials and color samples/images/brochures (Final Design Submission)</ListItem>
                    </List>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                    <Typography component="h1" sx={{ color: textSecondaryColor, fontSize: 23 }}>INSURANCE REQUIREMENTS FOR CONTRACTORS</Typography>
                    <Typography sx={{ color: textPrimaryColor }}>CONTRACTORS LISTED IN APPLICATION SHALL SUBMIT:</Typography>
                    <List sx={{ color: textPrimaryColor, listStyleType: 'disc', pl: 6 }}>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>General liability insurance coverage</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Bonding</ListItem>
                        <ListItem sx={{ display: 'list-item', p: 0.2 }}>Workman's Compensation Insurance</ListItem>
                    </List>
                </Box>
            </Box>
            <Form />
            <Footer />
        </Box>
    )
}

export default TenantImprovement;