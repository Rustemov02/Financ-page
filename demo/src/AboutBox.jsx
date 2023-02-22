import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import solving from './images/solving.jpg'


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

export default function AboutBox() {


    return (
        <Stack direction='row' spacing={10} py={7}>
            <Box>
                <img style={{ width: '540px', height: '360px' }} src={solving} />
            </Box>

            <Box sx={styles.boxStyle}>
                <Typography variant="h3" sx={{ fontSize: '28px', fontFamily: "Arial", color: '#000000' }}>We Solve Your Financial Problem</Typography>
                <Typography variant="paragraph" sx={styles.typographStyle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Typography>
                <Typography variant="paragraph" sx={styles.typographStyle}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
            </Box>
        </Stack>
    )
}