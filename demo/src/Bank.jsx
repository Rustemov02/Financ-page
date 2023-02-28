import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import bank from './images/bank.jpg'

import { Psychology, AccountBalanceWallet } from '@mui/icons-material/';

const styles = {
    boxStyle: {
        width: 474,
        height: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        gap: 4
    },
    typographStyle: {
        fontSize: '18px',
        fontFamily: "Roboto",
        color: "#808080"
    }
}

export default function Bank() {


    return (
        <Stack direction='row' spacing={10} py={7} alignItems="center" justifyContent='center' data-aos="fade-up">
            <Box>
                <img style={{ width: '540px', height: '360px' }} src={bank} />
            </Box>

            <Box sx={styles.boxStyle}>

                <Stack direction='row' alignItems='flex-start'>
                    <Psychology sx={{ fontSize: 80, color: 'blue' }} variant='outlined' />
                    <Box sx={{ px: 3, display: "flex", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 1 }}>
                        <Typography variant='h5'>Bank Loan</Typography>
                        <Typography variant='body1'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
                        <Typography variant='button' color='blue'>Learn More</Typography>
                    </Box>
                </Stack>

                <Stack direction='row' alignItems='flex-start'>
                    <AccountBalanceWallet sx={{ fontSize: 80, color: 'blue' }} variant='outlined' />
                    <Box sx={{ px: 3, display: "flex", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 1 }}>
                        <Typography variant='h5'>Banking Consulation</Typography>
                        <Typography variant='body1'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Typography>
                        <Typography variant='button' color='blue'>Learn More</Typography>
                    </Box>
                </Stack>




            </Box>
        </Stack>
    )
}