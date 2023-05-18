import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Sales } from './rowone/four boxes/Sales'
import { Users } from './rowone/four boxes/Users'
import { Downloads } from './rowone/four boxes/Downloads'
type Props = {}


const arr = [1, 1, 1, 1]


export const RowTwo = (props: Props) => {
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                <Grid xs={24} md={6} item mt={3}>
                    <Box
                        borderRadius={3}
                        bgcolor={'#35354E'}
                        width={'100%'}
                        height={"180px"}
                        sx={CENTERIT}
                    >
                        <Sales />
                    </Box>
                </Grid>
                <Grid xs={24} md={6} item mt={3}>
                    <Box
                        borderRadius={3}
                        bgcolor={'#35354E'}
                        width={'100%'}
                        height={"180px"}
                        sx={CENTERIT}
                    >
                        <Users />
                    </Box>
                </Grid>
                <Grid xs={24} md={6} item mt={3}>
                    <Box
                        borderRadius={3}
                        bgcolor={'#35354E'}
                        width={'100%'}
                        height={"180px"}
                        sx={CENTERIT}
                    >
                        <Downloads />
                    </Box>
                </Grid>
                <Grid xs={24} md={6} item mt={3}>
                    <Box
                        borderRadius={3}
                        bgcolor={'#35354E'}
                        width={'100%'}
                        height={"180px"}
                        sx={CENTERIT}
                    >
                        <Downloads />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}