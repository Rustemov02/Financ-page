import React from "react";
import { Stack, Typography } from "@mui/material";

import Premium from "./Premium";
import Basic from './Basic'
import Professional from './Professional'


export default function Pricing() {
 
    return (
        <Stack bgcolor='#f8f9fa' padding={10} >
            <Typography data-aos="fade-up" variant='h2' align="center" sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Pricing</Typography>
            <Stack direction='row' justifyContent='center' spacing={5} py={10}>
                <Basic />
                <Premium data-aos="fade-up"/>
                <Professional data-aos="fade-up"/>
            </Stack>
        </Stack>
    )
}