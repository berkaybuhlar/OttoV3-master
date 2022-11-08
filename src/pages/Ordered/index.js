import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const index = () => {
  const navigate=useNavigate()
  return (
    <Box mt={20} mb={25}>
      <Container maxWidth={'md'}>
        <Grid container rowGap={4}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent='center'
              direction='row'
              alignItems={'center'}
            >
              <Grid item>
                <Typography textAlign='center' variant='h3' fontWeight={700}>
                    Thank You
                </Typography>
              </Grid>
              <Grid item ml={2}>
                <img src='./image/thumbup.png' style={{ width: '50px' }}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography textAlign='center' variant='h5'>
              The form was submitted successfully
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Button
                variant='contained'
                size='large'
                onClick={() => navigate('/')}
                sx={{
                  "height": '57px',
                  "boxShadow": 'none',
                  "backgroundColor": '#E7C8CD',
                  "color": 'black',
                  '&:hover': {
                    backgroundColor: '#E7C8CD',
                    boxShadow: 'none'
                  }
                }}
              >
                Back to Otto Simulator
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default index
