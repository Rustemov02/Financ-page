import React, { useState, useEffect } from "react";
import { Paper, Stack, Button, Box, Typography, Chip, List, ListItem } from '@mui/material'
import './Header.css'

import { Facebook, Twitter, LinkedIn, Face } from '@mui/icons-material/';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";

import img from './images/img.jpg'
import money from './images/money.jpg'
import solving from './images/solving.jpg'
import solving2 from './images/solving_2.jpg'
import solving3 from './images/solving_3.jpg'
 
export default function Header() {

    const [itemColor, setColor] = useState('#fff')
    const [background, setBackground] = useState("rgba(0,0,0,0.2)")

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        console.log(window.scrollY)
        if (window.scrollY > 16) {
            setColor('black')
            setBackground('white')
        } else if (window.scrollY < 16) {
            setColor('#fff')
            setBackground("rgba(0,0,0,0.2)")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);



    const styles = {
        headerContainer: {
            backgroundImage: `url(${solving3})`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: "100vh",
        },
        customList: {
            padding: '12px 20px',
            fontSize: '20px',
            color: itemColor,
            '&:hover': {
                color: 'gray',
                cursor: "pointer",
                transition: '0.5s'
            }
        },
        customLogo: {
            fontSize: '30px',
            color: itemColor,
            height: "100%"
        },
        customHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottom: 'solid grey 1px',
            height: 70,
            zIndex: 999,
            backgroundColor: 'rgb(0,0,0)',
            backgroundColor: background,
            position: 'fixed',
            width: '100%'
        },
        boxStyle: {
            width: '80%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'flex-start',
            padding: '30px 50px',
            gap: 4,
        },
        typographStyle: {
            fontFamily: "Roboto",
            color: "#fff",
            textAlign: 'center'
        },
        customSlider: {
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
        <Stack>
            <Box sx={styles.headerContainer}>
                <Box sx={{ mt: 20 }}>
                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]} style={{ width: "80%", display: "flex", padding: '12px 10px' }}>
                        {data.map((item, index) => (
                            <SwiperSlide key={index} >
                                <Box sx={styles.boxStyle}>
                                    <Typography variant="h2" sx={{ fontFamily: "Arial", fontWeight: 600, color: '#fff' }}>{item.title}</Typography>
                                    <Typography variant="h5" sx={styles.typographStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?</Typography>
                                    <Button variant='contained' sx={{ borderRadius: '20px', padding: '12px 30px' }}>Get In Touch</Button>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            <Box sx={styles.customHeader}>
                <Typography sx={styles.customLogo}> Finances <Typography component='span' sx={{ fontSize: 40, color: 'blue' }}>.</Typography></Typography>

                <Stack direction='row'>
                    <List disablePadding={true} sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', gap: 2 }}>
                        {['Home', 'About', "Blog", 'Contact'].map((item, index) => (
                            <ListItem href={`#${item}`} sx={styles.customList} key={index}>
                                {item}
                            </ListItem>
                        ))}
                        <ListItem sx={styles.customList}>
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                        </ListItem>
                    </List>
                </Stack>
            </Box>
            
            {/* <Button onClick={()=>console.log('ko')}>Test</Button> */}
        </Stack>
    )
}