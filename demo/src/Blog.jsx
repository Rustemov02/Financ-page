import React from 'react'
import { Stack, Box, Card, Typography, Button, CardMedia, CardContent } from '@mui/material'
import money from './images/money.jpg'
import bank from './images/bank.jpg'
import img from './images/img.jpg'
const bull = (
    <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
)

const images = [
    {
        img: money
    },
    {
        img: bank
    },
    {
        img: img
    }
]

const styles = {
    typography: { 
        '&:hover': {
            color: 'blue',
            cursor : 'pointer',
            transition : '0.5s'
        }

    }
}

export default function Blog() {


    return (
        <Stack width='80%' margin='auto' data-aos="fade-up" alignItems='center' padding={7} >
            <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Our Blog</Typography>



            <Stack direction='row' spacing={2} py={7}>
                {images.map((item, index) => (
                    <Card key={index}>
                        <CardMedia component='img' height="194" image={item.img}>
                        </CardMedia>
                        <CardContent>
                            <Typography sx={styles.typography} variant='h5'>Banking is good for business? Why?</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">Ham Brook {bull}  Jan 18, 2023 {bull}  <Typography color="blue" component='span'>News</Typography></Typography>
                            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</Typography>
                            <Button sx={{ mt: 2 }} variant='text'>Continue Reading...</Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}