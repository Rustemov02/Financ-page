import React from 'react'
import { Stack , Box, Typography} from '@mui/material'
import person_1 from './images/person_1.jpg'
import person_2 from './images/person_2.jpg'
import person_3 from './images/person_3.jpg'

const data = [
    {
        img: person_1,
        name: 'Kaiara Spencer',
        department: "ACCOUNTANT",
        duration : 300
    },
    {
        img: person_2,
        name: 'Dave Simpson',
        department: "BANK TELLER",
        duration : 800
    },
    {
        img: person_3,
        name: 'Ben Thompson',
        department: "BANK TELLER",
        duration : 1500
    }
]


export default function MeetBox() {
 
    return (
        <Stack direction='row' spacing={3} py={10} >
            {data.map( (item , index) => (
                <Box key={index} data-aos="fade-up" data-aos-duration={item.duration}>
                    <img style={{ width: '270px', height: '200px' }} src={item.img} />
                    <Box sx={{paddingLeft : 2}}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="subtitle2" color="#808080">{item.department}</Typography>
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}