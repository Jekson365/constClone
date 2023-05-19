// @ts-nocheck

import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Content } from './rowone/Content'
import { Messages } from './rowone/Messages'
import { Fade } from 'react-reveal'
type Props = {}


const arr = [1, 0]


export const RowOne = (props: Props) => {
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                {arr.map((each) => {
                    return (
                        <Grid xs={24} md={12} item mt={3}>
                            <Fade up>
                                <Box
                                    borderRadius={3}
                                    bgcolor={'#35354E'}
                                    width={'100%'}
                                    height={"300px"}
                                    sx={CENTERIT}
                                >
                                    {each == 1 ? <Content /> : <Messages />}
                                </Box>
                            </Fade>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}