import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LineChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Line } from 'recharts'
import { CENTERIT } from '../../styles'
import { RowOne } from './components/RowOne'
import { RowTwo } from './components/RowTwo'
import { RowThree } from './components/RowThree'

type Props = {}

export const ColMain = (props: Props) => {

    return (
        <>
            <Grid container p={5} className='col2-main'>
                <Typography variant='h4'>მთავარი</Typography>
                <RowOne />
                <Grid container columns={24}>
                    <RowTwo />
                </Grid>
                <RowThree />
            </Grid>
        </>
    )
}