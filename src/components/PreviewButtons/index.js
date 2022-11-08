import { Button, Grid } from '@mui/material'
import React from 'react'

const index = ({ setPreview, setModal }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Button
          sx={{
            "borderColor": 'black',
            "zIndex": 2,
            "borderRadius": 2,
            "color": 'black',
            '&:focus': {
              backgroundColor: '#262626',
              color: 'white'
            }
          }}
          onClick={() => {
            setPreview('Kitchen')
            setModal(true)
          }}
          variant='outlined'
        >
         Kitchen
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            "borderColor": 'black',
            "zIndex": 2,
            "borderRadius": 2,
            "color": 'black',
            '&:focus': {
              backgroundColor: '#262626',
              color: 'white'
            }
          }}
          onClick={() => {
            setPreview('Bathroom')
            setModal(true)
          }}
          variant='outlined'
        >
         Bathroom
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            "borderColor": 'black',
            "zIndex": 2,
            "borderRadius": 2,
            "color": 'black',
            '&:focus': {
              backgroundColor: '#262626',
              color: 'white'
            }
          }}
          onClick={() => {
            setPreview('Hallway')
            setModal(true)
          }}
          variant='outlined'
        >
         Hallway
        </Button>
      </Grid>
    </Grid>
  )
}

export default index
