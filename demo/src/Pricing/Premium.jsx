import React from "react";
import { Stack, Typography, Box, Button, Paper } from '@mui/material'
import { Done } from '@mui/icons-material/';

export default function Premium() {

    const styles = {
        typographStyle: {
            fontSize: '18px',
            fontFamily: "Roboto",
            color: "#808080",
            py: 1
        },
        deleteItem: {
            fontSize: '18px',
            fontFamily: "Roboto",
            color: "#CCCCCC",
            textDecoration: 'line-through'
        },
        customPaper: {
            width: 370,
            height: 600,
            display: 'flex',
            flexDirection: 'column ',
            justifyContent: 'space-evenly',
            alignItem: 'center', 
            padding: '10px 20px',
        }
    }
    return (
        <Stack data-aos="fade-up" data-aos-duration="700">
            <Paper sx={styles.customPaper} elevation={15} >
                <Stack>
                    <Typography align="center" variant="h4">Premium</Typography>
                    <Typography align="center" py={2} component='span' variant="h3" color="blue">200$<Typography component='span' color="#CCCCCC">/year</Typography></Typography>
                </Stack>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{ width: 40, color: 'blue' }} /> Officia quaerat eaque neque</Typography>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{ width: 40, color: 'blue' }} /> Possimus aut consequuntur incidunt</Typography>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{ width: 40, color: 'blue' }} /> Lorem ipsum dolor sit amet</Typography>
                    <Typography variant="paragraph" sx={styles.typographStyle}><Done sx={{ width: 40, color: 'blue' }} /> Lorem ipsum dolor sit amet</Typography>
                    <Typography variant="paragraph" sx={styles.deleteItem}><Done sx={{ width: 40, color: '#808080' }} /> Dolorum esse odio quas architecto sint</Typography>
                </Box>
                <Button variant="contained" sx={{ borderRadius: 10, width: 140, alignSelf: 'center', marginTop: 5 }}>Buy Now</Button>
            </Paper>
        </Stack>
    )
}