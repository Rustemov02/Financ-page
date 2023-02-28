import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination} from "swiper";
import { Stack, Box, Typography, Button } from '@mui/material';

import img from './images/img.jpg'
import money from './images/money.jpg'
import solving from './images/solving.jpg'



export default function HeaderSlide() {

    const styles = {
        boxStyle: {
            width: '80%',
            margin : 'auto' ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'flex-start',
            padding: '30px 50px',
            gap: 4, 
        },
        typographStyle: { 
            fontFamily: "Roboto",
            color: "#808080",
            textAlign : 'center'
        }
    }

    const data = [
        {
            img: money,
            title: 'Financing Solutions',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo."
        },
        {
            img: solving,
            title: 'Banking Solutions',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo."

        },
        {
            img: img,
            title: 'Savings Accounts',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae minima delectus accusamus accusantium deleniti libero excepturi porro illo."

        }
    ]

    return (
        <Stack >  
            <Swiper pagination={true} modules={[Pagination]} style={{width: "80%", display: "flex", padding: '12px 10px' }}>
                {data.map((item, index) => (
                    <SwiperSlide key={index} > 
                            <Box sx={styles.boxStyle}>
                                <Typography variant="h2" sx={{  fontFamily: "Arial", fontWeight: 600, color: 'gray' }}>{item.title}</Typography>
                                <Typography variant="h5" sx={styles.typographStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?</Typography>
                                <Button variant='contained' sx={{ borderRadius: '20px', padding: '12px 30px' }}>Get In Touch</Button>
                            </Box>  
                    </SwiperSlide>
                ))}
            </Swiper>
        </Stack>
    )
}