import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { lightBlackColor, secondaryColor, textBlackColor, textGrayColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors";
import { useState } from "react";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Item from "../../shared/MenuItem";
import InputField from "../../shared/InputField";
const { Box, Typography, Button, darken, Select, lighten, MenuItem, CssBaseline } = require("@mui/material")
const Form = () => {


    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [rotateIcon, setRotateIcon] = useState(false);
    const handelClick = () => {
        setButtonDisabled(!buttonDisabled)
    }
    const [contractor, setContractor] = useState('Select Architecture/Contractor');

    const handleChange = (event) => {
        console.log("event", event.target.value)
        setContractor(event.target.value);
    };
    const handelOpen = () => {
        setRotateIcon(true);
    }
    const handelClose = () => {
        setRotateIcon(false);
    }
    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 4 }}>
                <Typography sx={{ color: textSecondaryColor, fontWeight: 600, textTransform: 'uppercase', pb: 1.7, fontSize: { xs: 16, sm: 20 } }}>application for design review</Typography>
                <Typography sx={{ color: textPrimaryColor }}>Submit To:</Typography>
                <Typography sx={{ color: textPrimaryColor }}>Luxe Locker DRC</Typography>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: 2 }}>
                    <Typography sx={{ color: textSecondaryColor, pb: 1, fontSize: { xs: 14, sm: 16 }, width: { xs: '99%', md: '88%' } }} >This form is to be used for all requests for Design Review.</Typography>
                    <InputField name="Owner Name" placeholder="name" width="44%" tabWidth="48%" />
                    <InputField name="Owner Phone" placeholder="(123) 456 6789" width="44%" tabWidth="48%" />
                    <InputField name="Owner Adress" placeholder="123 Main Street" width="44%" tabWidth="48%" />
                    <InputField name="Unit Number" placeholder="Unit Number" width="44%" tabWidth="48%" />
                    <InputField name="Owner Mailing Adress" placeholder="123 Main Street" width="44%" tabWidth="48%" />
                    <InputField name="Owner Email Adress" placeholder="example@gmail.com" width="44%" tabWidth="48%" />
                    <InputField name="Additional Email Address ( If desired for notifications related to this application )" placeholder="example@gmail.com" />
                    <Box sx={{ width: { xs: '99%', md: '88%' } }}>
                        <InputField name="Description of Proposed Improvement" height={80} width="100%" />
                        <Typography sx={{ color: textSecondaryColor, fontSize: 13, pt: 1 }}>
                            Provide a clear and comprehensive description of the Improvement(s) in detail and use additional pContractors and drawings as applicable.
                            Each submittal should convey a clear and comprehensive description of the proposed improvements.
                            Owner agrees to maintain all Improvement(s) Owner agrees to comply with all Applicable Law and to obtain all necessary permits. Owner
                            agrees not to begin construction of any proposed Improvement(s) until notified in writing of the DRC's approval.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                        <InputField name="Attachments Documents Listed From Submittal Checklist" placeholder="example@gmail.com" type="file" width="44%" tabWidth="48%" />
                        <Box width={{ xs: '100%', sm: '48%', md: '44%' }}>
                            <Typography sx={{ fontSize: 13, color: textGrayColor }}>Are you using any of the following?</Typography>
                            <Select
                                value={contractor}
                                renderValue={() => (contractor)}
                                onChange={handleChange}
                                fullWidth
                                onClose={handelClose}
                                onOpen={handelOpen}
                                IconComponent={() => (<ExpandCircleDownOutlinedIcon sx={{ transform: rotateIcon ? 'rotate(180deg)' : 'rotate(0deg)', color: textGrayColor, }} />)}
                                sx={{
                                    color: textGrayColor, fontSize: 15, bgcolor: lightBlackColor, borderRadius: 3, px: 2, "&:hover": { border: 2, borderColor: secondaryColor },
                                    '&&.Mui-focused': {
                                        border: 2,
                                        borderColor: secondaryColor,
                                    },
                                    '&&.MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
                                        border: 'none'
                                    }
                                }}
                                MenuProps={{ PaperProps: { style: { backgroundColor: lightBlackColor, } } }}
                            >
                                <MenuItem value="Contractor" sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) }, ':focus': { bgcolor: secondaryColor, ":hover": { bgcolor: darken(secondaryColor, 0.28) } } }}>Contractor</MenuItem>
                                <MenuItem value="Architecture" sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) }, ':focus': { bgcolor: secondaryColor, ":hover": { bgcolor: darken(secondaryColor, 0.28) } } }}>Architecture</MenuItem>
                                <MenuItem value="Contractor & Architecture" sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) }, ':focus': { bgcolor: secondaryColor, ":hover": { bgcolor: darken(secondaryColor, 0.28) } } }}>Contractor & Architecture</MenuItem>
                                <MenuItem value="N/A" sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) }, ':focus': { bgcolor: secondaryColor, ":hover": { bgcolor: darken(secondaryColor, 0.28) } } }}>N/A</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{ width: { xs: '99%', md: '88%' } }} >
                <Button variant="filled" sx={{ bgcolor: buttonDisabled ? lightBlackColor : secondaryColor, height: 45, borderRadius: 3, color: buttonDisabled ? textGrayColor : textBlackColor, my: 5, ":hover": { bgcolor: darken(secondaryColor, 0.28) }, ":disabled": { color: textGrayColor } }} disabled={buttonDisabled} fullWidth>Submit</Button>
                <Box sx={{ display: 'flex', gap: 0.3, pb: 6 }}>
                    <Checkbox size="small" sx={{ color: textSecondaryColor, height: 6, '&.Mui-checked': { color: secondaryColor } }} onClick={handelClick} />
                    <Typography sx={{ fontSize: 12, color: textGrayColor }}>
                        By checking this box off, you, the Owner, agree to maintain all Improvement(s).
                        You agree to comply with all Applicable Law and to obtain all necessary permits.
                        You agree not to begin construction of any proposed Improvement(s) until notified
                        in writing of the DRC's approval.
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Form;