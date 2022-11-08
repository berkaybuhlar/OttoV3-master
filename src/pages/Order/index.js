import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import axios from 'axios'

const index = () => {
  const navigate=useNavigate()
  const validationSchema=Yup.object({
    fullname: Yup.string().required('Please Enter Full Name'),
    email: Yup.string().email().required('Please Enter Email'),
    phone: Yup.string().required('Please Enter Phone'),
    address: Yup.string().required('Please Enter Address'),
    postcode: Yup.string().required('Please Enter Post Code'),
    country: Yup.string().required('Please Select Country'),
    company: Yup.string(),
    totalsqm: Yup.number()
        .min(5, "Sqm must be less than or equal to 5")
        .max(2000).required('Please Enter Sqm')
  })
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    resetForm
  }=useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      company: '',
      country: '',
      totalsqm: ''
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post('http://13.41.236.221/api/quotations', {
        customer_name: values.fullname,
        phone_number: values.phone,
        email: values.email,
        address: values.address,
        postcode: parseInt(values.postcode),
        country: values.country,
        company: values.company,
        square: parseInt(values.totalsqm)
        // tile_name : ,
        // colors:,
        // images :
      }).then(() => {
        navigate('/ordered')
        resetForm()
      })
    }
  })
  return (
    <Box mt={20} mb={25}>
      <Container maxWidth={'md'}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={5}>
              <Grid
                container
                justifyContent='center'
                direction='row'
                alignItems={'center'}
              >
                <Grid item>
                  <Typography textAlign='center' variant='h3' fontWeight={700}>
                    Let`s Get In Touch
                  </Typography>
                </Grid>
                <Grid item ml={2}>
                  <img src='./image/wavehand.png' style={{ width: '50px' }}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.fullname && touched.fullname ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.fullname}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Full Name
                     </FormHelperText>
                     )
              }
              <TextField
                fullWidth
                name='fullname'
                variant='outlined'
                placeholder='Please write full name...'
                id='fullname'
                color='primary'
                value={values.fullname}
                error={
                  errors.fullname && touched.fullname ? true:false
                }
                onChange={handleChange}
                focused
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.email && touched.email ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.email}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Email
                     </FormHelperText>
                     )
              }
              <TextField
                name='email'
                placeholder='Your email address...'
                value={values.email}
                error={
                  errors.email && touched.email ? true:false
                }
                onChange={handleChange}
                id='email'
                fullWidth
                focused
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.phone && touched.phone ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.phone}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Phone
                     </FormHelperText>
                     )
              }
              <NumberFormat
                value={values.phone}
                id='phone'
                name='phone'
                error={
                  errors.phone && touched.phone ? true:false
                }
                format="+44 (###) ###-####"
                mask="_"
                placeholder='+44 (###) ###-####'
                onChange={handleChange}
                fullWidth
                focused
                customInput={TextField}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.address && touched.address ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.address}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Address
                     </FormHelperText>
                     )
              }
              <TextField
                name='address'
                value={values.address}
                placeholder="Adress line..."
                error={
                  errors.address && touched.address ? true:false
                }
                onChange={handleChange}
                id='address'
                fullWidth
                focused
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              {
                    errors.postcode && touched.postcode ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.postcode}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Post Code
                     </FormHelperText>
                     )
              }
              <TextField
                name='postcode'
                placeholder='Your Postcode...'
                value={values.postcode}
                id='postcode'
                error={
                  errors.postcode && touched.postcode ? true:false
                }
                onChange={handleChange}
                fullWidth
                focused
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              {
                    errors.country && touched.country ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.country}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Country
                     </FormHelperText>
                     )
              }
              <TextField
                name='country'
                placeholder='Your Country...'
                value={values.country}
                id='country'
                error={
                  errors.country && touched.country ? true:false
                }
                onChange={handleChange}
                fullWidth
                focused
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.company && touched.company ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.company}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Company
                     </FormHelperText>
                     )
              }
              <TextField
                name='company'
                placeholder='Optional...'
                value={values.company}
                id='company'
                error={
                  errors.company && touched.company ? true:false
                }
                onChange={handleChange}
                fullWidth
                focused
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {
                    errors.totalsqm && touched.totalsqm ?
                   (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.totalsqm}
                    </FormHelperText>
                     ) :
                     (
                     <FormHelperText>
                        Total SQM
                     </FormHelperText>
                     )
              }
              <TextField
                name='totalsqm'
                value={values.totalsqm}
                placeholder="Min 5 sqm"
                id='totalsqm'
                error={
                errors.totalsqm && touched.totalsqm ? true:false
                }
                fullWidth
                onChange={handleChange}
                focused
              />
            </Grid>
            <Grid item sm={6} xs={12} mt={3}>
              <Grid
                container
                alignItems='center'
                justifyContent={'space-between'}
              >
                <Grid item xs={5}>
                  <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    onClick={() => {
                      navigate('/')
                      resetForm()
                    }}
                    sx={{
                      "boxShadow": 'none',
                      "height": '57px',
                      "backgroundColor": '#F2F2F2',
                      "color": 'black',
                      '&:hover': {
                        backgroundColor: 'white',
                        boxShadow: 'none'
                      }
                    }}
                  >
                 Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    fullWidth
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
                    Finish Design
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default index
