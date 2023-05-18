// @ts-ignore
import { Box, Grid, Typography } from '@mui/material'
import { LineChart, Line, Tooltip, CartesianGrid, YAxis, XAxis, ResponsiveContainer, AreaChart, ReferenceLine, Area } from 'recharts';

import React from 'react'
import { CENTERIT } from '../../../../styles';

type Props = {}

export const Content = (props: Props) => {
    const data =
        [
            { name: 'Page A', uv: 400, pv: 400, amt: 2400 },
            { name: 'Page B', uv: 100, pv: 1100, amt: 1400 },
            { name: 'Page C', uv: 500, pv: 500, amt: 400 },
            { name: 'Page D', uv: 400, pv: 300, amt: 100 },
            { name: 'Page E', uv: 200, pv: 200, amt: 400 },
        ];


    return (
        <>
            {/* balance */}
            <Grid

                columns={12}
                width={'100%'}
                alignItems={'center'}
                height={'100%'}
                display={'flex'}
                // flexDirection={'column'}
                container
            >
                <Grid item xs={6} display={'flex'} flexDirection={'column'} p={3}>
                    <Box>
                        <Typography component='p' color={'#1B9C85'} fontWeight={'bold'} letterSpacing={1}>Balance</Typography>
                        <Typography variant='h2' component={'h2'} color={'white'}>25.5$</Typography>
                    </Box>
                    <Box>
                        <Typography component='p'
                            color={'#E57C23'}
                            fontWeight={'bold'}
                            letterSpacing={2}
                        >TBC</Typography>
                        <Typography variant='h4' color={'white'}>12.8$</Typography>
                    </Box>
                    <Box>
                        <Typography component='p'
                            color={'#E57C23'}
                            fontWeight={'bold'}
                            letterSpacing={2}
                        >BOG</Typography>
                        <Typography variant='h4' color={'white'}>9.3$</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} height={'100%'} sx={CENTERIT} pr={3}>
                    <ResponsiveContainer width={'100%'} height="80%">
                        <AreaChart 
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                            <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#1B9C85" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </>
    )
}