import { Box } from "@mui/material"
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React from "react";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Box sx={{ mx: { xs: 3, md: 2, lg: 'auto' }, maxWidth: '1145px' }}>
                <Navbar />
                {children}
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;