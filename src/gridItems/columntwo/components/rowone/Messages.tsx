// @ts-nocheck
import { Grid, Box, Typography, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { CENTERIT } from '../../../../styles'
import { Fade, Zoom } from 'react-reveal'

type Props = {}

export const Messages = (props: Props) => {
    const messages = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const theme = createTheme()

    theme.typography.p = {
        'fontSize': '1.2rem',
        '@media (max-width:1524px)': {
            'fontSize': "0.9rem"
        }

    }
    return (
        <>
            <Grid container mt={3} mb={3} width={'100%'} height={'100%'} sx={{ "display": "flex", 'justifyContent': "center", 'overflowY': "scroll" }}>
                {messages.map((each) => {
                    return (
                        <>
                            <Zoom duration={1000} cascade>
                                <Grid
                                    container
                                    margin={'0 auto'}
                                    columns={12}
                                    item width={'90%'}
                                    borderRadius={2}
                                    mt={3}
                                    pl={3}
                                    pr={3}
                                    sx={{ "display": "flex", 'alignItems': "center", 'justifyContent': "space-between", 'flexDirection': "row" }}
                                    height={'100px'}
                                    bgcolor={'#4C4C6D'}>
                                    <Grid item xs={2} width={'60px'} height={'60px'}> 
                                        <Box
                                            sx={{ "width": "inherit", 'height': "inherit", 'borderRadius': "50%", 'bgcolor': "#1B9C85" }}
                                        ></Box>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <ThemeProvider theme={theme}>
                                            <Typography color='white' variant='p' pr={5} >
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aspernatur enim velit voluptas quos atque? Cupiditate
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                </Grid>
                            </Zoom>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}