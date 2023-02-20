import React from "react";
import { Paper, Stack, Box, Typography, Chip, List, ListItem } from '@mui/material'
import img from './images/img.jpg'
import './Header.css'

import { Facebook, Twitter, LinkedIn, Face } from '@mui/icons-material/';

// https://preview.colorlib.com/theme/finances/index.html#home-section

const styles = {
    headerContainer: {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        // backgroundColor : 'rgba(0,0,0,0)' ,
        backgroundSize: 'cover', 
        height: "100vh",
    },
    customList: {
        padding: '12px 20px',
        fontSize: '20px',
        color: '#fff',
        
    },
    customLogo: {
        fontSize: '30px',
        color: '#fff',
        height: "100%"
    }
}


export default function Header() {
    const list = ['Home', 'About', "Blog", 'Contact']
    return (
        <Stack sx={styles.headerContainer}>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottom: 'solid grey 1px', height: 70 }}>
                <Typography sx={styles.customLogo}> Finances <Typography component='span' sx={{ fontSize: 40, color: 'blue' }}>.</Typography></Typography>

                <Stack direction='row'>
                    <List disablePadding={true} sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', gap: 2 }}>
                        {list.map((item, index) => (
                            <ListItem sx={styles.customList} key={index}>
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
        </Stack>
    )
}