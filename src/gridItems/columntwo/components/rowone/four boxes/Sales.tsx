import { Grid, Typography, Stack } from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { CENTERIT } from '../../../../../styles'


export const Sales = () => {
    const data = [
        {
            "name": "Jan",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Feb",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "May",
            "uv": 2000,
            "pv": 9800
        },
    ];
    return (
        <>
            <Grid
                columns={12}
                container
                display={'flex'}
                alignContent={'center'}
                justifyContent={'space-between'}
                width={'100%'} height={'100%'}>
                <Grid xs={4} height={'100%'} p={1} sx={CENTERIT}>
                    <Stack>
                        <PaidIcon style={{ "fontSize": "40px", 'color': "#1B9C85" }} />
                        <Typography mt={0.5} component={'p'} color={'white'} fontWeight={'bold'}>+12,312</Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} height={'100%'} p={3} sx={CENTERIT}>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <BarChart width={730} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#1B9C85" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </>
    )
}