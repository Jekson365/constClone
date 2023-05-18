import React from 'react'
import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Sales } from './rowone/four boxes/Sales'
type Props = {}

export const RowThree = (props: Props) => {
    const arr = [8, 16]
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                {arr.map((each) => {
                    return (
                        <Grid xs={24} md={each} item mt={3}>
                            <Box
                                borderRadius={3}
                                bgcolor={'#35354E'}
                                width={'100%'}
                                height={"250px"}
                                sx={CENTERIT}
                            >
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}