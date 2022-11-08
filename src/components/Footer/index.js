import { Grid, Typography } from "@mui/material"

const index = () => {
  return (
    <Grid
      container
      justifyContent={['center', 'space-between']}
      rowGap={4}
      alignItems={['center', 'flex-start']}
      bgcolor='#E7C8CD'
      pt={8}
      pb={8}
      pr={2}
      pl={2}
    >
      <Grid
        item
        textAlign={['center', 'left']}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='body1' mb={1} fontWeight={600}>
              Follow Us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              alignItems='center'
              justifyContent={['center', 'flex-start']}
              container
              gap={1}
            >
              <Grid item pt={1} pl={1} pr={1} bgcolor='#514648'>
                <img src='/image/Instagram.png' alt='inta' />
              </Grid>
              <Grid item pt={1} pl={1} pr={1} bgcolor='#514648'>
                <img src='/image/Pinterest.png' alt='inta' />
              </Grid>
              <Grid item pt={1} pl={1} pr={1} bgcolor='#514648'>
                <img src='/image/YouTube.png' alt='inta' />
              </Grid>
              <Grid item pt={1} pl={1} pr={1} bgcolor='#514648'>
                <img src='/image/Link.png' alt='inta' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        textAlign='center'
      >
        <Typography variant='body1' mb={1} fontWeight={600}>
          Contact Us
        </Typography>
        <Typography gutterBottom={true} component='div' variant='caption'>
          Unit 11, 2 Ash Grove, London, E8 4RH
          <br />United Kingdom
        </Typography>
        <Typography gutterBottom={true} component='div' variant='caption'>
          Telephone: +44 2034 889317
        </Typography>
        <Typography gutterBottom={true} component='div' variant='caption'>
          Email: info@ottotiles.co.uk
        </Typography>
        <Typography variant='caption'>
          Opening Hours: Mon-Fri, 10:00 to 18:00
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={['center', 'right']}
      >
        <Typography variant='body1' mb={1} fontWeight={600}>
           Branches Istanbul
        </Typography>
        <Typography gutterBottom={true} component='div' variant='caption'>
          Firuzaga Mah. Cukurcuma Cad. <br />
          No:27A Beyoglu - Istanbul / Turkey
        </Typography>
        <Typography gutterBottom={true} component='div' variant='caption'>
          Telephone: +90 (212) 526 00 52
        </Typography>
        <Typography variant='caption'>
          Email: istanbul@ottotiles.com.tr
        </Typography>
      </Grid>
    </Grid>
  )
}

export default index
