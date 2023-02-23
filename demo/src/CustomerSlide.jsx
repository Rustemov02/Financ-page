import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import person_1 from './images/person_1.jpg'
import person_2 from './images/person_2.jpg'
import person_3 from './images/person_3.jpg'
import { Typography, Avatar, Box } from "@mui/material";

export default function CustomersSlide() {

    const data = [
        {
            img: person_1,
            name: 'Kaiara Spencer',
            title: '“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti tenetur ad perspiciatis quam atque eius quia suscipit repudiandae animi voluptatem.”'
        },
        {
            img: person_2,
            name: 'Dave Simpson',
            title: "“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates exercitationem ut totam distinctio magnam quisquam, unde iure. Labore!.”"

        },
        {
            img: person_3,
            name: 'Ben Thompson',
            title: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi odio nihil officia quasi nostrum, ipsa est? Culpa, ullam dolorem!”'

        }
    ] 
    return (
        <>
            <Swiper
                style={{ width: '80%' , padding : '30px 10px' }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} style={{display : 'flex' ,flexDirection : 'column' , alignItems : 'center' , }}>
                        <Typography align="center" sx={{fontSize : '30px' , color : 'gray'}}>{item.title} </Typography>
                        <Box sx={{display : 'flex' , flexDirection :'row' , alignItems : 'center' , gap : 2 , marginTop : 5}}>
                            <Avatar alt="Remy Sharp" src={item.img} sx={{height : 60,width : 60}}/>
                            <Typography color="gray" variant="body1">{item.name}</Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
