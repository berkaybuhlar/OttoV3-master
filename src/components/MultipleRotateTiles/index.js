import { Grid } from '@mui/material'
import React from 'react'
import SvgTile from '../SvgTile'
const index = (prop) => {
  const { ref, type, currentPattern, setCurrentPattern, currentColor }=prop

  return (
    <Grid container justifyContent={'center'} alignItems='center'>
      <Grid xs='6' sx={{ rotate: '-90deg', height: `${type}px !important` }}>
        <SvgTile
          ref={ref}
          currentPattern={currentPattern}
          setCurrentPattern={setCurrentPattern}
          currentColor={currentColor}
        />
      </Grid>
      <Grid xs='6' sx={{ height: `${type}px !important` }}>
        <SvgTile
          ref={ref}
          currentPattern={currentPattern}
          setCurrentPattern={setCurrentPattern}
          currentColor={currentColor}
        />
      </Grid>
      <Grid xs='6' sx={{ rotate: '180deg', height: `${type}px !important` }}>
        <SvgTile
          ref={ref}
          currentPattern={currentPattern}
          setCurrentPattern={setCurrentPattern}
          currentColor={currentColor}
        />
      </Grid>
      <Grid xs='6' sx={{ rotate: '90deg', height: `${type}px !important` }}>
        <SvgTile
          ref={ref}
          currentPattern={currentPattern}
          setCurrentPattern={setCurrentPattern}
          currentColor={currentColor}
        />
      </Grid>
    </Grid>
  )
}

export default index
