import { Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import money from './images/svgs/money.svg'
import shopping from './images/svgs/shopping.svg'
import card from './images/svgs/card.svg'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200
});

const data = [
    {
        title: 'Money Saving',
        duration: 1000,
        source: money
    },
    {
        title: 'Online Shopping',
        duration: 600,
        source: shopping
    },
    {
        title: 'Credit / Debit Cards',
        duration: 300,
        source: card
    }
]

export default function ShoppingHead() {


    return (
        <Stack direction='row' alignItems='center' justifyContent='center' padding={7}> 
            {data.map((item, index) => (
                <Box key={index} data-aos="fade-up" data-aos-duration={item.duration} sx={{ width: "28%", display: "flex", flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <img style={{ width: 80, height: 90 }} src={item.source} />
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography align="center" color="#808080">A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
                </Box>
            ))} 
        </Stack> 
    )
}