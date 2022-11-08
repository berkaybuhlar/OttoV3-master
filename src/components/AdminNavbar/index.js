import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Button, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const HideOnScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

const index = (props) => {
  const navigate=useNavigate()
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: 'white', boxShadow: 'none' }}>
          <Toolbar>
            <Grid
              container
              justifyContent='space-between'
              alignItems='center'
              mt={3}
              mb={2}
            >
              <Grid item>
                <Link to='/'>
                  <img
                    src='/image/Logo.webp'
                    alt='logo'
                    style={{ width: '180px' }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Grid
                  container
                  alignItems='center'
                >
                  <Grid item ml={1}>
                    <Grid container>
                      <Grid item>
                        <Button
                          className='admin_layout_buttons'
                          variant='contained'
                          onClick={() => navigate('/admin/tiles')}
                        >
                            Tiles
                        </Button>
                      </Grid>
                      <Grid item ml={2}>
                        <Button
                          className='admin_layout_buttons'
                          variant='contained'
                          onClick={() => navigate('/admin/orders')}
                        >
                            Costumer Request
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}

export default index
