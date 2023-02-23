import React from 'react' 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Stack, Box, Typography, Button } from '@mui/material';

import img from './images/img.jpg'
import money from './images/money.jpg'
import solving from './images/solving.jpg'



export default function OurWorkHead() {

    const styles = {
        boxStyle: {
            width: 474, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: "flex-start",
            justifyContent: 'flex-start',
            padding: '12px 50px',
            gap: 4
        },
        typographStyle: {
            fontSize: '18px',
            fontFamily: "Roboto",
            color: "#808080"
        }
    }

    const data = [
        {
            img: money,
            title: '01. Online Applications'
        },
        {
            img: solving,
            title: '02. Get an approval'
        },
        {
            img: img,
            title: '03. Card delivery'
        }
    ]

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} style={{ width: "80%", display: "flex", padding: '12px 10px' }}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Stack direction='row' justifyContent='center' alignItems='center'>
                            <Box>
                                <img style={{ width: '540px', height: '420px' }} src={item.img} />
                            </Box>
                            <Box sx={styles.boxStyle}>
                                <Typography variant="h3" sx={{ fontFamily: "Arial", fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>{item.title}</Typography>
                                <Typography variant="paragraph" sx={styles.typographStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?</Typography>
                                <Button variant='contained' sx={{borderRadius : '20px' , padding : '12px 30px'}}>Learn More</Button>
                            </Box>

                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}