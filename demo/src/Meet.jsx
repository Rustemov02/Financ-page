import React from "react";
import { Stack } from '@mui/material'
import MeetHead from "./MeetHead";
import MeetBox from "./MeetBox";



export default function Meet() {


    return (
        <Stack borderBottom={1} borderColor='gray'>
            <Stack width='80%' margin='auto' data-aos="fade-up" alignItems='center' padding={7}  >
                <MeetHead />
                <MeetBox />
            </Stack>
        </Stack>
    )
}