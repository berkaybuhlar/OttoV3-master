import React, { useState } from 'react'
import { Badge, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CheckIcon from '@mui/icons-material/Check'
import '../../../App.css'
import Hexagon from '../../../data/Hexagon.json'
import Tile from '../../../data/Canvases.json'
import SvgPatterns from '../../SvgPatterns'
const index = ({
  setCurrentColor,
  setCurrentCategory,
  setCurrentPattern,
  layingTypes,
  setLayingTypes,
  currentPattern
}) => {
  const [categoryIndex, setCategoryIndex]=useState(null)
  const [colourIndex, setColourIndex]=useState(-1)
  const ColorDatas =[
    '#94DBDD', '#ACC6DF', '#80A4D1', '#688195', '#9F7567', '#835C55',
    '#7C5644', '#9B8A83', '#AA8250', '#946C48', '#CDA98E', '#A68B76',
    '#E3CD5D', '#B1945A', '#A68446', '#C0A87A', '#E3E4D4', '#DEDDC1',
    '#DDD6AC', '#9E9878', '#939A92', '#82736C', '#827D76', '#686964',
    '#E4E0C5', '#A7BCD1', '#E1CCA1', '#DBB3A7', '#83735C', '#60564D',
    '#849187', '#9A9C91', '#767974', '#545550', '#A7BFA2', '#899F7C',
    '#83927B', '#768276'
  ]
  const setLaying=() => {
    if (currentPattern.id!==0) {
      if (layingTypes.includes(currentPattern)===false) {
        if (layingTypes.length===3) {
          layingTypes.splice(2, 1)
          layingTypes.unshift(currentPattern)
        } else {
          layingTypes.unshift(currentPattern)
        }
      }
    }
  }
  return (
    <Grid
      container
      alignItems={'flex-start'}
      justifyContent='space-between'
      rowGap={2}
    >
      <Grid item md={3} sm={12} xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant='body1' fontWeight={600}>
              Shape
            </Typography>
          </Grid>
          <Grid item ml={1}>
            <Badge
              invisible={categoryIndex!==0}
              color="success"
              sx={{ position: 'relative' }}
              badgeContent={
                <CheckIcon sx={{ position: 'absolute', width: '15px' }} />
              }
            >
              <Box
                onClick={() => {
                  setCategoryIndex(0)
                  setCurrentCategory('Tile 20x20')
                  setLaying()
                  setCurrentPattern(Tile[0])
                }}
                textAlign='center'
                width='80px'
                height='80px'
              >
                <SvgPatterns Tile={Tile[0]} Index={index} />
                <Typography variant='caption' fontWeight={'bold'}>
                  Square
                </Typography>
              </Box>
            </Badge>
          </Grid>
          <Grid item ml={1}>
            <Badge
              invisible={categoryIndex!==1}
              color="success"
              sx={{ position: 'relative' }}
              badgeContent={
                <CheckIcon sx={{ position: 'absolute', width: '15px' }} />
              }
            >
              <Box
                onClick={() => {
                  setCategoryIndex(1)
                  setCurrentCategory('Hexagon')
                  setLaying()
                  setCurrentPattern(Hexagon[0])
                }}
                textAlign='center'
                width='80px'
                height='80px'
              >
                <SvgPatterns Tile={Hexagon[0]} Index={index} />
                <Typography variant='caption' fontWeight={'bold'}>
                  Hexagon
                </Typography>
              </Box>
            </Badge>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant='body1' fontWeight={600}>
              Colours
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {ColorDatas.map((data, index) => (
                <Grid item key={index}>
                  <Badge
                    invisible={colourIndex!==index}
                    color="success"
                    sx={{ position: 'relative' }}
                    badgeContent={
                      <CheckIcon sx={{ position: 'absolute', width: '15px' }} />
                    }
                  >
                    <Box
                      borderRadius={2}
                      onClick={() => {
                        setColourIndex(index)
                        setCurrentColor(data)
                      }}
                      textAlign='center'
                      width='35px'
                      height='35px'
                      bgcolor={data}
                    />
                  </Badge>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
