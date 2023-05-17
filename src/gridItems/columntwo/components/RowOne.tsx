import { Grid, Box } from '@mui/material'
import { CENTERIT } from '../../../styles'
import { Content } from './rowone/Content'
type Props = {}


const arr = [1, 1]


export const RowOne = (props: Props) => {
    return (
        <>
            <Grid container columns={24} mt={3} columnSpacing={4}>
                {arr.map(() => {
                    return (
                        <Grid xs={24} md={12} item mt={3}>
                            <Box
                                borderRadius={3}
                                bgcolor={'#35354E'}
                                width={'100%'}
                                height={"300px"}
                                sx={CENTERIT}
                            >
                                <Content />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}