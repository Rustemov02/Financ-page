import React from 'react'
import { Stack, Typography, TextField, Box , Button} from '@mui/material'


export default function ContactForm() {


    return (
        <Stack padding={7} bgcolor="#fff" >
            <Typography variant='h4' sx={{ paddingBottom : '40px' }}>Contact Form</Typography>
            <Stack direction='column' spacing={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ width: '48%', borderRadius: '40px' }}
                        label="First Name"
                        rows={0}
                        maxRows={10}
                        margin='dense'
                    />

                    <TextField
                        margin='dense'
                        sx={{ width: '48%', borderRadius: '40px' }}
                        label="Last Name"
                        multiline
                        maxRows={4}
                        variant='outlined'
                    />
                </Box>

                <TextField
                    label="Email"
                    multiline
                    maxRows={4}
                />

                <TextField
                    label="Subject"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Write your notes or questions here.."
                    multiline
                    rows={7}
                    placeholder="Message"
                />
            </Stack>
            <Button variant='contained' sx={{borderRadius : '20px' , alignSelf : 'flex-start' , width : '200px' ,height : 50 , marginTop : '10px'}}>Send Message</Button>
        </Stack>
    )
}