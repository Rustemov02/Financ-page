import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import OurWorkHead from './OurWorkHead'



export default function OurWork() {

    const styles = {
        boxStyle: {
            width: '850px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }
    }

    return (
        <Stack alignItems="center" spacing={5} padding={7}>
            {/* HEADER */}
            <Box sx={styles.boxStyle} >
                <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 600, color: '#007BFF' }}>How It Works</Typography>
                <Typography component='paragraph' color="#808080" align='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas fugiat molestiae eligendi repudiandae error?</Typography>
            </Box>

            <OurWorkHead/>
        </Stack>
    )
}