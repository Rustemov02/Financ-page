import React from "react";
import { Stack, Typography } from "@mui/material";

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
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 800
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 600
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
            duration: 600
        }
    ];

    return (
        <Stack paddingTop={13}>
            <Typography align='center' variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Gallery</Typography>


            <ImageList variant="standart" cols={4}  gap={10} sx={{border :'solid red 1px' ,display : "flex", flexWrap : 'wrap' ,alignItems : 'center' ,justifyContent : 'center' , padding: 6, width: '80%', height: '800px', margin: 'auto' }} >
                {itemData.map((item) => (
                    <ImageListItem sx={{border : 'solid red 1px'}} data-aos="fade-up" data-aos-duration={item.duration} key={item.img} width={200}>
                        <img
                            style={{ width: 230, height: 140, alignSelf: 'center' }}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </Stack>
    )
}