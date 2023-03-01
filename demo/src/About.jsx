import { Stack, Typography, Box, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import AboutBox from './AboutBox'
import AOS from 'aos'
import 'aos/dist/aos.css';
import "typeface-cormorant";
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

const theme = createTheme({
    typography: {
        fontFamily: [
            "Open Sans"
        ]
    },
});

export default function About() {


    return (
        <ThemeProvider theme={theme}>
            <Stack width='80%' margin='auto' data-aos="fade-left" alignItems='center' padding={7} >
                <Box sx={styles.boxStyle}>
                    <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 500, color: '#007BFF' }}>About Us</Typography>
                    <Typography component='paragraph' color="#808080" align='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro temporibus provident quas itaque ipsum dolores unde facere harum doloremque.</Typography>
                </Box>
                <AboutBox />
            </Stack>
        </ThemeProvider>
    )
}