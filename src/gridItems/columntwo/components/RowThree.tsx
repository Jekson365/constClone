// @ts-nocheck
import React from 'react'
import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Sales } from './rowone/four boxes/Sales'
import { Fade, Zoom } from 'react-reveal'
import { BoxOne } from './rowone/last two boxes/BoxOne'

type Props = {}

export const RowThree = (props: Props) => {
    const arr = [
        {
            title: "static",
            element: <BoxOne />
        },
        {
            title: "slider",
            element: <BoxOne/>
        }
    ]
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                {arr.map((each) => {
                    return (
                        <Grid xs={12} md={each} item mt={3}>
                            <Fade up duration={each * 100}>
                                <Box
                                    borderRadius={3}
                                    bgcolor={'#35354E'}
                                    width={'100%'}
                                    height={"250px"}
                                    sx={CENTERIT}
                                >
                                    {each.element}
                                </Box>
                            </Fade>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}