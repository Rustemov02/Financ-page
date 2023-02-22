import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Done, FormatAlignJustifyOutlined } from '@mui/icons-material/';
import money from './images/money.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200
});

const styles = {
    boxStyle: {
        width: 474,
        height: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        gap: 4
    },
    typographStyle: {
        fontSize: '18px',
        fontFamily: "Roboto",
        color: "#808080", 
        display : 'flex' ,
        alignItems : 'center'
    }
}

export default function ShoppinBox() {


    return (
        <Stack direction='row' spacing={10} py={7} >
            <Box data-aos="fade-up" data-aos-duration='1000'>
                <img style={{ width: '540px', height: '360px' }} src={money} />
            </Box>

            <Box sx={styles.boxStyle} data-aos="fade-up" data-aos-duration='800'>
                <Typography variant="h3" sx={{ fontSize: '28px', fontFamily: "Arial", color: '#000000' }}>Banking Solutions Is Our Priority</Typography>
                <Typography variant="paragraph" sx={styles.typographStyle}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>

                <Box sx={{display : 'flex' , flexDirection : 'column' ,alignItems : 'center' , gap : 1}}>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{width :40 , color : 'blue'}}/> Officia quaerat eaque neque</Typography>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{width :40 , color : 'blue'}}/> Lorem ipsum dolor sit amet</Typography>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{width :40 , color : 'blue'}}/> Consectetur adipisicing elit</Typography>
                </Box>
            </Box>
        </Stack>
    )
}