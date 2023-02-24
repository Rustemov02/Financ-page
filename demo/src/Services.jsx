import React from 'react'
import { Stack  , Typography} from '@mui/material'
import ServicesCard from './ServicesCards'


export default function Services() {

 
    return (
        <Stack alignItems='center' padding={10} bgcolor="#f8f9fa" >
            <Typography data-aos="fade-up" variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Our Services</Typography>
            <ServicesCard/> 
        </Stack>
    )
}