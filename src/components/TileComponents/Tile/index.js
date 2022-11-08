import { Grid } from '@mui/material'
import React, { forwardRef, Fragment } from 'react'
import SvgTile from '../../SvgTile'
import MultiTile from '../MultiTile'
const index = forwardRef((prop, ref) => {
  return (
    <Fragment>
      {prop.mode==='single' ? (
          <Grid container justifyContent='center' alignItems='center'>
            <Grid
              item
              width='550px'
              sx={{ transform: `rotate(${prop.scale}deg)` }}
            >
              <SvgTile
                ref={ref}
                currentColor={prop.currentColor}
                currentPattern={prop.currentPattern}
                setCurrentPattern={prop.setCurrentPattern}
              />
            </Grid>
          </Grid>
      ):
        (
         prop.currentPattern.type==='Hexagon' ? (
           <Grid>
             <MultiTile
               ref={ref}
               currentColor={prop.currentColor}
               currentPattern={prop.currentPattern}
               setCurrentPattern={prop.setCurrentPattern}
             />
           </Grid>
         ):(
          <Grid container alignItems={'center'} justifyContent='center'>
            {
              ['0', '90', '180', '270'].map((data, index) => (
                <Grid
                  item
                  width='225px'
                  height='225px'
                  key={index}
                  sx={{
                    transform: `rotate(${(prop.scale+(90*(index+1)))}deg)`
                  }}
                  bgcolor={data}
                  textAlign='center'
                >
                  <SvgTile
                    ref={ref}
                    currentPattern={prop.currentPattern}
                    setCurrentPattern={prop.setCurrentPattern}
                    currentColor={prop.currentColor}
                  />
                </Grid>
              ))
            }
          </Grid>
         )
        )
      }
    </Fragment>
  )
})

export default index
