import React from "react";
import { Stack, Box, Typography } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200
});

const styles = {
    boxStyle: {
        width: '850px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
    }
}


export default function MeetHead() {
 
    return (
        <Stack data-aos="fade-up" data-aos-duration='1000'>
            <Box sx={styles.boxStyle} >
                <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Meet Team</Typography>
                <Typography component='paragraph' color="#808080" align='center'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
            </Box>
        </Stack>
    )
}