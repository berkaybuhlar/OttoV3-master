import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import GridViewIcon from '@mui/icons-material/GridView'

const index = ({ scale, setScale, setMode, mode, currentPattern }) => {
  const handleScale=() => {
    if (scale===270) {
      setScale(0)
    } else {
      setScale(scale+90)
    }
  }

  const handleMode=(type) => {
    setMode(type)
  }

  return (
    <Grid
      container
      mt={1}
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
        >
          <Grid item mr='1'>
            <Typography variant='caption'>
                Rotate
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              sx={{ backgroundColor: '#F9F9F9' }}
              onClick={handleScale}
            >
              <RestartAltIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
