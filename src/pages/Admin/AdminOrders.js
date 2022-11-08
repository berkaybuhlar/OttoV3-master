import {
  Button,
  Checkbox,
  Container,
  Grid,
  Typography
} from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import OrderModal from './OrderModal'
const AdminOrders = () => {
  return (
    <Grid container bgcolor='#FAFAFA'>
      <Container
        maxWidth='xl'
        sx={{
          minHeight: '100vh',
          margin: '30px',
          marginTop: '70px',
          padding: '30px' }}
      >
        <Grid container>
          <Grid item xs='12'>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems='center'
            >
              <Grid item>
                <Typography variant='h4' fontWeight={800}>
                  Request Customer
                </Typography>
              </Grid>
              <Grid item>
                <Button className='delete_request_button' variant='contained'>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mt={3} xs='12'>
            <Grid
              container
              bgcolor='white'
              borderRadius='10px'
              justifyContent={'center'}
              direction='column'
            >
              <Grid item xs='12'>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{
                    paddingBottom: '20px',
                    paddingTop: '20px'
                  }}
                >
                  <Grid item xs='1'>
                    <Checkbox />
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    No
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Customer Name
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Tile Name
                    </Typography>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Date
                    </Typography>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Square
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Status
                    </Typography>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                    Action
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{
                    borderTop: '1px solid #ECEDF0',
                    paddingBottom: '20px',
                    paddingTop: '15px'
                  }}
                >
                  <Grid item xs='1'>
                    <Checkbox defaultChecked />
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2'>
                    # 1
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Typography variant='body2'>
                    Test User
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Grid container alignItems={'center'}>
                      <Grid item>
                        <img
                          style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '10px'
                          }}
                          src='/image/wavehand.png'/>
                      </Grid>
                      <Grid item ml={1}>
                        <Typography variant='body2'>
                          Tile Name
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2'>
                      22.08.2022
                    </Typography>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2'>
                    126m²
                    </Typography>
                  </Grid>
                  <Grid item xs='2'>
                    <Grid
                      container
                      justifyContent='center'
                      alignItems={'center'}
                      sx={{
                        width: '80px',
                        height: '45px',
                        textAlign: 'center',
                        borderRadius: '50px',
                        backgroundColor: '#FFBEBE',
                        color: 'black'
                      }}
                    >
                      <Typography variant='body2'>
                      Status
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs='1'>
                    <Typography variant='body2'>
                      <OrderModal />
                      <DeleteIcon
                        sx={{ marginLeft: '10px', cursor: 'pointer' }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                      borderTop: '1px solid #ECEDF0',
                      paddingBottom: '20px',
                      paddingTop: '15px'
                    }}
                  >
                    <Grid item xs='1'>
                      <Checkbox defaultChecked />
                    </Grid>
                    <Grid item xs='1'>
                      <Typography variant='body2'>
                    # 2
                      </Typography>
                    </Grid>
                    <Grid item xs='2'>
                      <Typography variant='body2'>
                    Test User 2
                      </Typography>
                    </Grid>
                    <Grid item xs='2'>
                      <Grid container alignItems={'center'}>
                        <Grid item>
                          <img
                            style={{
                              width: '45px',
                              height: '45px',
                              borderRadius: '10px'
                            }}
                            src='/image/wavehand.png'/>
                        </Grid>
                        <Grid item ml={1}>
                          <Typography variant='body2'>
                          Tile Name 2
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs='1'>
                      <Typography variant='body2'>
                      12.08.2022
                      </Typography>
                    </Grid>
                    <Grid item xs='1'>
                      <Typography variant='body2'>
                    142m²
                      </Typography>
                    </Grid>
                    <Grid item xs='2'>
                      <Grid
                        container
                        justifyContent='center'
                        alignItems={'center'}
                        sx={{
                          width: '80px',
                          height: '45px',
                          textAlign: 'center',
                          borderRadius: '50px',
                          backgroundColor: '#D3FFCF',
                          color: 'black'
                        }}
                      >
                        <Typography variant='body2'>
                      Status
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs='1'>
                      <Typography variant='body2'>
                        <OrderModal />
                        <DeleteIcon
                          sx={{ marginLeft: '10px', cursor: 'pointer' }}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default AdminOrders
