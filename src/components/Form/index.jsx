import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Form() {
    const [signupUser, setSignupUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handelChange = (event) => {
        const { name, value } = event.target;
        setSignupUser({
            ...signupUser,
            [name]: value
        })
    }
    console.log("🚀 ~ Form ~ signupUser:", signupUser)
    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', width: '35rem', border: '1px solid pink', borderRadius: '10px', px: 8, py: 6 }}>
            <Typography sx={{ color: 'pink', fontSize: '30px' }}>Signup Form</Typography>
            <TextField id="outlined-basic" label="userame" variant="outlined" fullWidth onChange={handelChange} />
            <TextField id="outlined-basic" label="email" variant="outlined" fullWidth onChange={handelChange} />
            <TextField id="outlined-basic" type="password" label="password" variant="outlined" fullWidth onChange={handelChange} />
            <TextField id="outlined-basic" type="password" label="confirm password" variant="outlined" onChange={handelChange} fullWidth />
            <Button variant="outlined" sx={{ borderColor: 'pink', color: 'pink', height: '45px', '&:hover': { bgcolor: 'pink', border: 'none', color: 'white' } }} fullWidth>SignUp</Button>
        </Box>
    )
}