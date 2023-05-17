import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
type Props = {}


const arr = [1, 1, 1, 1]


export const RowTwo = (props: Props) => {
    return (
        <>
            <Grid container columns={24} mt={2} columnSpacing={4}>
                {arr.map(() => {
                    return (
                        <Grid xs={24} md={6} item mt={3}>
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