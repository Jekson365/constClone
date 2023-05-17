import { createContext } from 'react'
import { Grid } from '@mui/material/'
import { GridStyles_1, GridStyles_2 } from './styles'
import { ColumnOne } from './gridItems/ColumnOne'
import { ColMain } from './gridItems/columntwo/ColMain'

export const Store: any = createContext([])

function App() {
  return (
    <>
      <Store.Provider value={{ name: "goca" }}>
        <Grid container columns={24} height={'100vh'}>
          <Grid
            item
            xs={4}
            height={'100%'}
            sx={GridStyles_1}
            
          >
            <ColumnOne />
          </Grid>
          <Grid
            item
            xs={20}
            height={'100%'}
            sx={GridStyles_2}
            className='col2-main'
          >
            <ColMain/>
          </Grid>
        </Grid>
      </Store.Provider>
    </>
  )
}

export default App
