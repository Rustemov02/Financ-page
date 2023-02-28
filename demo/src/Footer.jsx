import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material/';
export default function Footer() {

    return (
        <Stack bgcolor='#343A40'>
            <Stack direction='row' width="80%" margin='auto' bgcolor='#343A40' color='white' justifyContent='space-evenly' borderBottom={1} borderColor="#808080" gap={5} paddingY={15}>
                <Box sx={{ padding: '12px 10px', width: '25%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography paddingBottom='10px' variant="body1">About Us</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#808080' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</Typography>
                </Box>

                <Box sx={{ padding: '12px 10px', width: '25%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography paddingBottom='10px' variant="body1">Quick Links</Typography>
                    {['Terms', 'Policy', 'Abous Us', 'Services', 'Testimonials', 'Contact Us'].map((item, index) => (
                        <Typography key={index} variant='subtitle1' sx={{ textDecoration: 'underline', color: '#808080' }}>{item}</Typography>
                    ))}
                </Box>

                <Box sx={{ padding: '12px 10px', width: '25%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography paddingBottom='10px' variant="body1">Follow Us</Typography>
                    <Box sx={{ color: '', display: 'flex', gap: 4 }}>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <LinkedIn />
                    </Box>
                </Box>
            </Stack>
            <Typography align="center" py={8} color='#808080'>Copyright © 2023 All rights reserved | This template is made with  by Colorlib</Typography>
        </Stack>
    )
}