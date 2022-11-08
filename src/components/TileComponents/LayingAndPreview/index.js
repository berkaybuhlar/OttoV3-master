import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import PreviewButtons from '../../PreviewButtons'
import LayingPattern from '../../LayingPatterns'
import CloseIcon from '@mui/icons-material/Close'
const index = ({
  setPreview,
  setModal,
  layingTypes,
  setLayingTypes,
  setCurrentPattern
}) => {
  const handleLaying=(data) => {
    setLayingTypes([...layingTypes.filter((el) => el.id !==data.id)])
  }
  
  const handleSelected=(data) => {
    setLayingTypes([...layingTypes.filter((el) => el.id !==data.id)])
    setCurrentPattern(data)
  }
  
  return (
    <Grid
      container
      justifyContent='center'
      alignItems={'flex-start'}
      mt={4}
      spacing={2}
    >
      <Grid item md={6} sm={12} xs={12}>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Typography variant='body1' fontWeight={700}>
              Laying Type
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {layingTypes.length===0 ? null:(
                layingTypes?.map((data, index) => (
                  <Grid item key={index}>
                    <Box
                      key={index}
                      borderRadius={1}

                      textAlign='center'
                      width='80px'
                      height='80px'
                      position='relative'
                      bgcolor='#F2F2F2'
                    >
                      <IconButton
                        onClick={() => {
                          handleLaying(data)
                        }
                        }
                        sx={{
                          backgroundColor: 'white',
                          position: 'absolute',
                          top: -10,
                          right: -10
                        }}
                        size='small'
                      >
                        <CloseIcon sx={{ width: 20, color: 'black' }} />
                      </IconButton>
                      <Grid
                        onClick={() => {
                          handleSelected(data)
                        }}
                      >
                        <LayingPattern Tile={data} />
                      </Grid>
                    </Box>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Typography variant='body1' fontWeight={700}>
              Design Preview
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PreviewButtons
              setModal={setModal}
              setPreview={setPreview}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
