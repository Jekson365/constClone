import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export const Content = (props: Props) => {
    return (
        <>
            {/* balance */}
            <Grid
            
                columns={12}
                width={'100%'}
                height={'100%'}
                bgcolor={'gray'}
                display={'flex'}
                flexDirection={'column'}
                container
            >
                <Grid item xs={6} display={'flex'} p={3}>
                    <Box>
                        <Typography variant='h2' component={'h2'}>25.5$</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} p={3} >hello world</Grid>
            </Grid>
        </>
    )
}