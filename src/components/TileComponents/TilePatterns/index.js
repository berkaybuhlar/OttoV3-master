import CheckIcon from '@mui/icons-material/Check'
import { Badge, Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SvgPatterns from '../../SvgPatterns'
import Tiles from '../../../data/Canvases.json'
import Hexagon from '../../../data/Hexagon.json'
const index = ({
  setCurrentPattern,
  layingTypes,
  currentCategory,
  currentPattern
}) => {
  const [patternIndex, setPatternIndex]=useState(null)
  const handleLaying=(data) => {
    if (currentPattern.id!==0) {
      if (layingTypes.includes(data)===false) {
        if (layingTypes.length===3) {
          layingTypes.splice(2, 1)
          layingTypes.unshift(currentPattern)
        } else {
          layingTypes.unshift(currentPattern)
        }
      }
    }
  }
  useEffect(() => {
    setPatternIndex(null)
  }, [currentCategory])
  return (
    <Grid
      container
      justifyContent='center'
      alignItems={'flex-start'}
      mt={2}
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Typography variant='body1' fontWeight={600}>
              Tile Patterns
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}
              sx={{
                maxHeight: '358px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                paddingTop: '10px'
              }}
            >
              {currentCategory === 'Tile 20x20' ? (
                Tiles.filter((el) => el.id!==0)?.map((data, index) => (
                  <Grid item key={index}>
                    <Badge
                      invisible={patternIndex!==index}
                      color="success"
                      sx={{ position: 'relative' }}
                      badgeContent={
                        <CheckIcon sx={{
                          position: 'absolute',
                          width: '15px'
                        }}
                        />
                      }
                    >
                      <Box
                        onClick={() => {
                          setPatternIndex(index)
                          setCurrentPattern(data)
                          handleLaying(data)
                        }}
                        sx={patternIndex!==index ?
                          { filter: currentPattern.id===0 ? null:"blur(1px)", opacity: 0.7 }:
                          null
                        }
                        textAlign='center'
                        width='80px'
                        height='80px'
                      >
                        <SvgPatterns Tile={data} Index={index} />
                      </Box>
                    </Badge>
                  </Grid>
                ))
              ):(
                Hexagon.filter((el) => el.id!==0)?.map((data, index) => (
                  <Grid item key={index}>
                    <Badge
                      invisible={patternIndex!==index}
                      color="success"
                      sx={{ position: 'relative' }}
                      badgeContent={
                        <CheckIcon sx={{
                          position: 'absolute',
                          width: '15px'
                        }}
                        />
                      }
                    >
                      <Box
                        onClick={() => {
                          setPatternIndex(index)
                          setCurrentPattern(data)
                          handleLaying(data)
                        }}
                        sx={patternIndex!==index ?
                          { filter: currentPattern.id===0 ? null:"blur(1px)", opacity: 0.7 }:
                          null
                        }
                        textAlign='center'
                        width='80px'
                        height='80px'
                        bgcolor='#F2F2F2'
                      >
                        <SvgPatterns Tile={data} Index={index} />
                      </Box>
                    </Badge>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
