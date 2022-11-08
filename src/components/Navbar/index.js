import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
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
                  <Grid item mt={1}>
                    <ArrowBackIcon sx={{ color: 'black' }} />
                  </Grid>
                  <Grid item ml={1}>
                    <Typography variant='h6' color='black'>
                      <a style={{ color: 'black', textDecoration: 'none' }} href='https://www.ottotiles.co.uk/'>
                       Visit ottotiles.co.uk
                      </a>
                    </Typography>
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
