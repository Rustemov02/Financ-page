import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Gallery() {

    const itemData = [
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_3.jpg',
            title: 'Breakfast',
            duration: 1200
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_1.jpg',
            title: 'Burger',
            duration: 1200
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_2.jpg',
            title: 'Camera',
            duration: 1200
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_4.jpg',
            title: 'Coffee',
            duration: 1200
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_3.jpg',
            title: 'Breakfast',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_1.jpg',
            title: 'Burger',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_2.jpg',
            title: 'Camera',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_3.jpg',
            title: 'Breakfast',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_1.jpg',
            title: 'Burger',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_2.jpg',
            title: 'Camera',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_4.jpg',
            title: 'Coffee',
            duration: 600
        }
    ];

    return (
        <Stack paddingTop={13}>
            <Typography align='center' variant='h2' data-aos="fade-up" sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Gallery</Typography>
 


            <Stack py={7}  direction="row" flexWrap='wrap' justifyContent="center" width='80%' margin='auto' gap={2}>
                {itemData.map((item, index) => (
                    <Box key={index} data-aos="fade-up">
                        <img src={item.img} style={{widht : 260 , height : 170}} />
                    </Box>
                ))}
            </Stack>

        </Stack>
    )
}