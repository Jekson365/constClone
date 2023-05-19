import { Grid, Typography } from '@mui/material'
import { RowOne } from './components/RowOne'
import { RowTwo } from './components/RowTwo'
import { RowThree } from './components/RowThree'


export const ColMain = () => {

    return (
        <>
            <Grid container p={5} className='col2-main'>
                <Typography variant='h4' color='white'>მთავარი</Typography>
                <RowOne />
                <Grid container columns={24}>
                    <RowTwo />
                </Grid>
                <RowThree />
            </Grid>
        </>
    )
}