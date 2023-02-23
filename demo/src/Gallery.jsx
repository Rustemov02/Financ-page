import React from "react";
import { Stack, Typography } from "@mui/material";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {

    const itemData = [
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_3.jpg',
            title: 'Breakfast',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_1.jpg',
            title: 'Burger',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_2.jpg',
            title: 'Camera',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_4.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_3.jpg',
            title: 'Breakfast',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_1.jpg',
            title: 'Burger',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_2.jpg',
            title: 'Camera',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_4.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_4.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://preview.colorlib.com/theme/finances/images/img_5.jpg',
            title: 'Hats',
        }

    ];

    return (
        <Stack paddingTop={13}>
            <Typography align='center' variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>Gallery</Typography>


            <ImageList variant="standart" cols={4} gap={10} sx={{ padding: 6, width: '80%', margin: 'auto' }} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} width={200}>
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