import Checkbox from "@mui/material/Checkbox";
import { lightBlackColor, secondaryColor, textGrayColor, textPrimaryColor, textSecondaryColor } from "../../../utils/styles/colors";
const { Box, Typography, OutlinedInput, TextField, Button } = require("@mui/material")

const Form = () => {
    return (
        <Box component="form" sx={{ px: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 4 }}>
                <Typography sx={{ color: textSecondaryColor, fontSize: 20, fontWeight: 600, textTransform: 'uppercase', pb: 1.7 }}>application for design review</Typography>
                <Typography sx={{ color: textPrimaryColor }}>Submit To:</Typography>
                <Typography sx={{ color: textPrimaryColor }}>Luxe Locker DRC</Typography>
            </Box>
            <Box>
                <Typography sx={{ pl: 10, color: textSecondaryColor, pb: 1 }}>This form is to be used for all requests for Design Review.</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: 2 }}>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Owner Name</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="Name" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Owner Phone</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="(123) 456 6789" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Owner Adress</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="123 Main Street" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Unit Number</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="Unit Number" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Owner Mailing Adress</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="123 Main Street" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Owner Email Adress</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%',

                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="example@gmail.com" />
                    </Box>
                    <Box sx={{ width: '84.8%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Additional Email Address ( If desired for notifications related to this application )</Typography>
                        <OutlinedInput fullWidth sx={{
                            bgcolor: lightBlackColor, fontSize: 13, borderRadius: 3, height: 55, width: '100%', input: {
                                color: textSecondaryColor,
                            },
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="example@gmail.com" />
                    </Box>
                    <Box sx={{ width: '84.8%' }}>
                        <Typography sx={{ color: textGrayColor, fontSize: 13 }}>Description of Proposed Improvement</Typography>
                        <OutlinedInput fullWidth sx={{
                            bgcolor: lightBlackColor, fontSize: 13, borderRadius: 3, height: 55, width: '100%', input: { color: textSecondaryColor }, "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="Example@gmail.com" />
                        <Typography sx={{ color: textSecondaryColor, fontSize: 13, pt: 1 }}>
                            Provide a clear and comprehensive description of the Improvement(s) in detail and use additional pages and drawings as applicable.
                            Each submittal should convey a clear and comprehensive description of the proposed improvements.
                            Owner agrees to maintain all Improvement(s) Owner agrees to comply with all Applicable Law and to obtain all necessary permits. Owner
                            agrees not to begin construction of any proposed Improvement(s) until notified in writing of the DRC's approval.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ fontSize: 13, color: textGrayColor }}>Attachments Documents Listed From Submittal Checklist</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%', input: {
                                color: textSecondaryColor,
                            },
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="example@gmail.com" />
                    </Box>
                    <Box sx={{ width: '42%' }}>
                        <Typography sx={{ fontSize: 13, color: textGrayColor }}>Are you using any of the following?</Typography>
                        <OutlinedInput sx={{
                            bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: 55, width: '100%', input: { color: textSecondaryColor },
                            "&.MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: secondaryColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: secondaryColor
                                },
                            },
                        }} placeholder="example@gmail.com" />
                    </Box>
                    <Box sx={{ width: '84.8%' }} >
                        <Button variant="filled" sx={{ bgcolor: lightBlackColor, height: 45, borderRadius: 3, color: textGrayColor, my: 2 }} fullWidth>Submit</Button>
                        <Box sx={{ display: 'flex', gap: 0.5, pb: 6 }}>
                            <Checkbox sx={{ color: textSecondaryColor, '&.Mui-checked': { color: secondaryColor, }, }} />
                            <Typography sx={{ fontSize: 12, color: textGrayColor }}>
                                By checking this box off, you, the Owner, agree to maintain all Improvement(s).
                                You agree to comply with all Applicable Law and to obtain all necessary permits.
                                You agree not to begin construction of any proposed Improvement(s) until notified
                                in writing of the DRC's approval.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Form;