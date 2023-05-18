import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, Tooltip, Bar } from 'recharts'
import { CENTERIT } from '../../../../../styles'
import DownloadIcon from '@mui/icons-material/Download'

type Props = {}

export const Downloads = (props: Props) => {
    const data = [
        {
            "name": "Jan",
            "uv": 1000,
            "pv": 2400
        },
        {
            "name": "Feb",
            "uv": 5000,
            "pv": 1398
        },
        {
            "name": "May",
            "uv": 1900,
            "pv": 9800
        },
    ];
    return (
        <>
            <Grid
                columns={12}
                container
                display={'flex'}
                alignContent={'center'}
                justifyContent={'space-between'}
                width={'100%'} height={'100%'}>
                <Grid xs={4} height={'100%'} p={1} sx={CENTERIT}>
                    <Stack>
                        <DownloadIcon style={{ "fontSize": "40px", 'color': "#1B9C85" }} />
                        <Typography mt={0.5} component={'p'} color={'white'} fontWeight={'bold'}>+4,892</Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} height={'100%'} p={3} sx={CENTERIT}>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <BarChart width={730} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#1B9C85" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </>
    )
}