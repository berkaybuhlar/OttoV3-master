import React from 'react'
import {
  Button,
  Grid,
  Hidden,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const ForgotPassword = () => {
  const navigate=useNavigate()

  return (
    <Grid container height='100vh' >
      <Hidden smDown>
        <Grid item sm={6} xs={12} >
          <div className='login_image' />
        </Grid>
      </Hidden>
      <Grid sm={6} xs={12} >
        <Grid
          container
          width='100%'
          height='100%'
          justifyContent='center'
          alignItems='center'
        >
          <Grid container justifyContent={'center'} alignItems='center' >
            <Grid item xs={12}>
              <Typography align='center' variant='h4' fontWeight={700}>
                Forgot password ?
              </Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography
                sx={{ color: '#979797' }}
                align='center'
                variant='body1'
                fontWeight={500}
              >
                No worries, we’ll send you reset instructions.
              </Typography>
            </Grid>
            <Grid item xs={6} mt={5}>
              <Grid xs={12}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  className='Input_Login'
                  placeholder='Enter your email'
                  fullWidth
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight'
                  }}
                />
              </Grid>
              <Grid item xs={12} mt={3}>
                <Button
                  className='login_button'
                  sx={{ fontWeight: '600' }}
                  fullWidth
                  variant='contained'
                >
                  Reset Password
                </Button>
              </Grid>
              <Grid item xs={12} textAlign={'center'} mt={2}>
                <Grid container justifyContent='center' mt={3}>
                  <Grid item>
                    <KeyboardBackspaceIcon/>
                  </Grid>
                  <Grid item>
                    <Typography
                      onClick={() => navigate('/admin/login')}
                      variant='body1'
                      sx={{ cursor: 'pointer' }}
                      fontWeight={500}
                    >
                      Back To Login
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ForgotPassword
