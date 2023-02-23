import React from 'react'
import { Stack, Typography, Card, Box, CardMedia, CardContent, CardActions, Button } from '@mui/material'

import money from './images/svgs/money.svg'
import card from './images/svgs/card.svg'
import goldbox from './images/svgs/goldbox.svg'
import dollar from './images/svgs/dollar.svg'
import shopping from './images/svgs/shopping.svg'
import megaphone from './images/svgs/megaphone.svg'

export default function ServicesCard() {

    const data = [
        {
            img: money,
            title: 'Business Consulting',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione animi tempora sint hic quod',
        },
        {
            img: card,
            title: 'Credit Card',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo beatae minus incidunt voluptates?'
        },
        {
            img: goldbox,
            title: 'Income Monitoring',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio veritatis aperiam consequuntur qui.'
        },
        {
            img: dollar,
            title: 'Insurance Consulting',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore suscipit distinctio inventore doloribus deserunt!'
        },
        {
            img: shopping,
            title: 'Financial Investment',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio voluptatibus repellat hic officia quibusdam!'
        },
        {
            img: megaphone,
            title: 'Financial Management',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iusto eaque velit saepe nobis ipsa?'
        }
    ]

    const styles = {
        customCard: {
            width: '28%',
            margin : 1,
            padding: '12px 10px',
            display: 'flex',
            flexDirection: "column"
        }
    }

    return (
        <Stack marginTop={7} direction="row" flexWrap='wrap' justifyContent='center'>
            {data.map((item, index) => (
                <Card key={index} sx={styles.customCard}>
                    <img src={item.img} style={{ height: 100, width: 80, marginLeft: 18 }} />

                    <CardContent  >
                        <Typography variant='h5'>{item.title}</Typography>
                        <Typography variant='body2' color='text.secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione animi tempora sint hic quod!</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='text'>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Stack>
    )
}