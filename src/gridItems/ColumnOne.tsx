import { Box, Stack, Button, ButtonGroup } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ColOneStack, NavColumn, NavItems, mainImage } from '../styles'



export const ColumnOne = () => {

  const Navitems = [
    {
      title: "მთავარი",
      icon: <HomeIcon />
    },
    {
      title: "ანალიტიკა",
      icon: <ShowChartIcon />
    },
    {
      title: "სანიშნი",
      icon: <BookmarkIcon />
    },
    {
      title: "ანგარიში",
      icon: <AttachMoneyIcon />
    },

  ]
  return (
    <>
      <Stack
        p={5}
        sx={ColOneStack}
      >
        <Box
          bgcolor={'primary.light'}
          sx={mainImage}
        ></Box>
        <Stack sx={NavColumn} mt={3}>
          {Navitems.map((each) => {
            return (
              <>
                <Button 
                sx={NavItems}
                >
                  <Box mr={1}
                    color={'white'}
                  >
                    {each.icon}
                  </Box>
                  {each.title}
                </Button>
              </>
            )
          })}
        </Stack>
        <ButtonGroup variant='text' sx={{ "marginTop": "40px" }}>
          <Button size='small'>გასვლა</Button>
          <Button size='small'>ავტორიზაცია</Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}