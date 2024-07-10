import { Box, OutlinedInput, Typography } from "@mui/material"
import { lightBlackColor, secondaryColor, textGrayColor, textSecondaryColor } from "../../../utils/styles/colors"
import React from "react"
const InputField = ({ name, placeholder, type, height, width, tabWidth }) => {
    return (
        <Box sx={{ width: width ? { xs: '100%', sm: tabWidth, md: width } : { xs: '99%', md: '88%' } }}>
            <Typography sx={{ color: textGrayColor, fontSize: 13 }}>{name}</Typography>
            <OutlinedInput sx={{
                bgcolor: lightBlackColor, fontSize: 13, input: { color: textSecondaryColor }, borderRadius: 3, height: height ? height : 55, width: '100%',
                "&.MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: secondaryColor,
                    },
                    '&:hover fieldset': {
                        borderColor: secondaryColor
                    },
                },
            }} placeholder={placeholder}
                type={type}
            />
        </Box>
    )
}

export default InputField;