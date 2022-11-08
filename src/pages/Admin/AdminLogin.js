/* eslint-disable max-len */
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
const AdminLogin = () => {
  const navigate=useNavigate()
  const [valuesInput, setValues] = React.useState({
    password: '',
    showPassword: false
  })
  const validationSchema=Yup.object({
    email: Yup.string().required('Email is required!'),
    password: Yup.string().required('Password is required!')
  })
  const { handleChange, handleSubmit, errors, resetForm, values }=useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      const response=await axios.post('', { email: values.email, password: values.password })
      if (response.status===200) {
        console.log(response.data)
      } else {
        alert('Auth is not correct')
      }
    }
  })

  const handleChangeValue = (prop) => (event) => {
    setValues({ ...valuesInput, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...valuesInput,
      showPassword: !valuesInput.showPassword
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
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
              <Typography align='center' variant='h3' fontWeight={700}>
                Welcome to Otto Tiles<br/>
                    Desktop App
              </Typography>
            </Grid>
            <Grid item xs={6} mt={8}>
              <Grid xs={12}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  className='Input_Login'
                  fullWidth
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight'
                  }}
                />
              </Grid>
              <Grid xs={12} mt={3}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  className='Input_Login'
                  fullWidth
                  type={valuesInput.showPassword ? 'text' : 'password'}
                  value={valuesInput.password}
                  onChange={handleChangeValue('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {valuesInput.showPassword ?
                        <VisibilityOff /> :
                        <Visibility />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12} textAlign={'right'} mt={2}>
                <Typography
                  onClick={() => navigate('/admin/forgot-password')}
                  variant='caption'
                  sx={{ cursor: 'pointer' }}
                  fontWeight={700}
                >
                  Forgot Password?
                </Typography>
              </Grid>
              <Grid item xs={12} mt={4}>
                <Button
                  className='login_button'
                  onClick={() => navigate('/admin/orders')}
                  fullWidth
                  variant='contained'
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AdminLogin
