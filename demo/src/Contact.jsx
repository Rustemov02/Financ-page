import React from "react";
import { Stack, Typography, Box } from '@mui/material'
import { LocationOn, LocalPhone, Email } from '@mui/icons-material/';
import ContactForm from "./ContactForm";

export default function Contact() {


    return (
        <Stack padding={10} bgcolor='#f8f9fa'>
            <Typography align="center" variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Contact Us</Typography>

            <Stack direction='row' alignItems='center' justifyContent='center' py={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: "25%" }}>
                    <LocationOn style={{ color: "#007BFF" }} />
                    <Typography align="center" color="#808080">203 Fake St. Mountain View, Azerbaijan, Baku, Yasamal</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: "25%" }}>
                    <LocalPhone style={{ color: "#007BFF" }} />
                    <Typography align="center" color="#808080">+1 232 3235 324</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: "25%" }}>
                    <Email style={{ color: "#007BFF" }} />
                    <Typography align="center" color="#808080">youremail@domain.com</Typography>
                </Box>
            </Stack>

            <ContactForm />
        </Stack>
    )
}