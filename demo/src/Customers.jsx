import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import CustomersSlide from './CustomerSlide';

export default function Customers() {
 
    return (
        <Stack paddingY={17} alignItems='center'>
            <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Happy Customers</Typography>

            <CustomersSlide/>

        </Stack>
    )
}