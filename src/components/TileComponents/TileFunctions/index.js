import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Tiles from '../../../data/Canvases.json'
import Hexagon from '../../../data/Hexagon.json'
const index = forwardRef((prop, ref) => {
  const {
    setCurrentPattern,
    currentPattern,
    handleClick
  }=prop
  const navigate =useNavigate()
  const handleReset=() => {
    if (currentPattern.type!==undefined) {
      Hexagon.filter((el) => el.id===currentPattern.id)?.map((data) => (
        setCurrentPattern(data)
      ))
    } else {
      Tiles.filter((el) => el.id===currentPattern.id)?.map((data) => (
        setCurrentPattern(data)
      ))
    }
  }
  /* const downloadBlob=(blob, filename) => {
    const objectUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = objectUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000)
  }
  const downloadSVG = useCallback(() => {
    if (ref.current !== undefined && ref.current !==null) {
      const svg = ref.current.innerHTML
      const blob = new Blob([svg], { type: "image/svg+xml" })
      downloadBlob(blob, `myimage.svg`)
    }
  }, [])*/
  return (
    <Grid
      container
      bgcolor='#F9F9F9'
      borderRadius={2}
      mt={2}
      p={4}
      rowGap={3}
    >
      <Grid item xs={12}>
        <Typography variant='body1' fontWeight={600}>
            Select your tile
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent='center'
          rowGap={2}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='body2'>
                  <strong>Used Colour</strong>
                  <strong>{currentPattern.object_used_colors}</strong>
                </Typography>
                {currentPattern.object_used_colors === undefined ||
                  currentPattern.object_used_colors.length===0 ? (
                    <Typography variant='body2'>
                      Empty
                    </Typography>
                  ):(
                    <Grid container spacing={1}>
                      {
                        currentPattern.object_used_colors?.map(
                            (data, index) =>
                              (
                                <Grid
                                  key={index}
                                  item>
                                  <Box
                                    borderRadius={2}
                                    textAlign='center'
                                    width='20px'
                                    height='20px'
                                    bgcolor={data}
                                  />
                                </Grid>
                              ))
                      }
                    </Grid>
                  )}
              </Grid>
              <Grid item xs={12} mt={1}>
                <Typography variant='body2'>
                  <strong>Tile Pattern</strong>:{currentPattern?.object_name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Grid
              container
              justifyContent='flex-end'
              alignItems='flex-start'
              textAlign={['left', 'right']}
            >
              <Grid item xs={12} >
                <Typography variant='h5' fontWeight={700}>
                    £{currentPattern?.sqm_price} per sqm
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2'>
                    Minimum order 5 sqm
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent='center'
          spacing={2}>
          <Grid item>
            <Button
              onClick={() => handleReset()}
              variant='contained'
              sx={{
                "boxShadow": 'none',
                "border": '1px solid black',
                "backgroundColor": 'white',
                "color": 'black',
                '&:hover': {
                  backgroundColor: 'white',
                  boxShadow: 'none'
                }
              }}
            >
                Reset
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              onClick={() => handleClick()}
              sx={{
                "boxShadow": 'none',
                "backgroundColor": '#262626',
                "color": 'white',
                '&:hover': {
                  backgroundColor: '#262626',
                  boxShadow: 'none'
                }
              }}
            >
                Download Image
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              onClick={() => navigate('/order')}
              sx={{
                "boxShadow": 'none',
                "backgroundColor": '#E7C8CD',
                "color": 'black',
                '&:hover': {
                  backgroundColor: '#E7C8CD',
                  boxShadow: 'none'
                }
              }}
            >
                Finish Design
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

export default index
