import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Grid, Stack, Typography } from '@mui/material';
import { ResponsiveContainer, CartesianGrid, Tooltip, Line, LineChart } from 'recharts';
import { CENTERIT } from '../../../../../styles';



export const Bitcoin = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
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
                        <CurrencyBitcoinIcon style={{ "fontSize": "40px", 'color': "#1B9C85" }} />
                        <Typography mt={0.5} component={'p'} color={'white'} fontWeight={'bold'}>+12,312</Typography>
                    </Stack>
                </Grid>
                <Grid xs={8} height={'100%'} p={3} sx={CENTERIT}>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </>
    )
}