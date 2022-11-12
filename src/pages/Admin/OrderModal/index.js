/* eslint-disable max-len */
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import { Add } from '@mui/icons-material'
const style = {
  "position": 'absolute',
  "top": '50%',
  "left": '50%',
  "transform": 'translate(-50%, -50%)',
  "width": '1000px',
  "bgcolor": 'background.paper',
  "border": 'none',
  '&:focus': {
    'border': 'none'
  },
  "boxShadow": 24,
  "p": 4,
  "borderRadius": 2
}
const index = () => {
  const [modal, setModal]=useState(true)
  return (
    <>
      <CreateIcon
        sx={{ cursor: 'pointer' }}
      />
      {/* Bu modali acilista kaldirin sadece urun detaylara ekleyin */}
      <Modal
        open={modal}
        onClose={() => setModal(!modal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Popup */}
          <Grid container justifyContent={'space-around'} width='100%' height='100%'>
            <Grid item md='6' xs='12'>
              <Grid container justifyContent={'space-between'} alignItems='space-between' width={'100%'} height={'100%'}>
                <Grid item xs='12' mb={5}>
                  <img src='/image/thumbup.png' alt='test' style={{ backgroundColor: 'red', width: '100%', height: '440px', borderRadius: '20px' }}/>
                </Grid>
                <Grid item xs='8'>
                  <Grid container justifyContent={'flex-start'} alignItems='center'>
                    <Grid item>
                      <Typography variant='body1' fontWeight={600}>
                            Status:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          "borderColor": 'black',
                          "zIndex": 2,
                          "marginLeft": '10px',
                          "color": 'black',
                          "borderRadius": 100,
                          "padding": 1,
                          '&:focus': {
                            backgroundColor: '#262626',
                            color: 'white'
                          }
                        }}
                        variant='outlined'
                        fullWidth
                      >
                          Confirm
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          "borderColor": 'black',
                          "zIndex": 2,
                          "borderRadius": 100,
                          "color": 'black',
                          "marginLeft": '15px',
                          "padding": 1,
                          '&:focus': {
                            backgroundColor: '#262626',
                            color: 'white'
                          }
                        }}
                        variant='outlined'
                        fullWidth
                      >
                          Wrong
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs='4'>
                  <Button
                    sx={{
                      "backgroundColor": '#E7C8CD',
                      "borderColor": '#E7C8CD',
                      "padding": 1,
                      "zIndex": 2,
                      "borderRadius": 100,
                      "color": 'black',
                      '&:focus': {
                        backgroundColor: '#E7C8CD',
                        color: 'black',
                        borderColor: '#E7C8CD'
                      },
                      '&:hover': {
                        backgroundColor: '#E7C8CD',
                        color: 'black',
                        borderColor: '#E7C8CD'
                      }
                    }}
                    fullWidth
                    variant='outlined'
                  >
                    <Add />
                      Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md='5' sm='12' xs='12' sx={{ backgroundColor: '#F9F9F9', padding: '30px', borderRadius: '10px' }}>
              <Typography variant='h6' fontWeight={700}>Customer Information</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Customer name:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Email:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Phone:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Address:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Postcode:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Country:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Company:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Date:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Tile Pattern:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Colour:</Typography>
              <Typography mt={2} variant='body1' fontWeight={600}>Total Sqm:</Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default index
