// @ts-nocheck
import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Sales } from './rowone/four boxes/Sales'
import { Users } from './rowone/four boxes/Users'
import { Downloads } from './rowone/four boxes/Downloads'
import { Fade } from 'react-reveal'
import { Bitcoin } from './rowone/four boxes/Bitcoin'


type Props = {}


const arr = [
    {
        title: "sales",
        element: <Sales />
    },
    {
        title: "users",
        element: <Users />
    },
    {
        title: "download",
        element: <Downloads />
    },
    {
        title: "sales",
        element: <Bitcoin />
    },
]


export const RowTwo = (props: Props) => {
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                {arr.map((each) => {
                    return (
                        <>
                            <Grid xs={24} md={6} item mt={3}>
                                <Fade up>
                                    <Box
                                        borderRadius={3}
                                        bgcolor={'#35354E'}
                                        width={'100%'}
                                        height={"180px"}
                                        sx={CENTERIT}
                                    >
                                        {each.element}
                                    </Box>
                                </Fade>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}