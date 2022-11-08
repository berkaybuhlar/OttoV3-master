/* eslint-disable max-len */
import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Add, Close, Edit } from '@mui/icons-material'
import { ReactSVG } from 'react-svg'
import './js/SelectedSvg'
import { handleSvg } from './js/SelectedSvg'
const AdminTiles = () => {
  const hiddenFileInput = React.useRef(null)
  const [svgState, setSvg]=useState()
  const [tileInput, setTileInput]=useState({ name: "", color_pattern: 0, tag: "", price: 0, img: "" })
  const [tiles, setTiles]=useState([{ name: "Test Name", id: 0, img: "/image/wavehand.png", color_pattern: 2, tag: "Tile", price: 0 }])
  const [errord, setError]=useState(false)

  const resetForm = () => {
    setTileInput({ name: "", color_pattern: 0, tag: "", price: 0, img: "" })
    setSvg()
  }
  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    if (fileUploaded.type==='image/svg+xml') {
      setSvg(URL.createObjectURL(fileUploaded))
      setError(false)
    } else {
      setError(true)
    }
  }
  const onDelete = (id) => {
    setTiles(tiles.filter((tile_) => {
      return tile_.id != id
    }))
  }
  const onAddTile = (event) => {
    const copiedArray = Array.from(tiles)
    copiedArray.push({ ...tileInput, id: parseInt(Math.random() * 100), img: svgState })
    setTiles(copiedArray)
    resetForm()
  }
  const selectHexagon = (_event) => {
    const updated = { ...tileInput }
    updated["tag"] = "Hexagon"
    setTileInput(updated)
  }
  const selectTile = (_event) => {
    const updated = { ...tileInput }
    updated["tag"] = "Tile"
    setTileInput(updated)
  }
  const handleName = (event) => {
    const inputValue = event.target.value
    const updated = { ...tileInput }
    updated["name"] = inputValue
    setTileInput(updated)
  }
  const handlePrice = (event) => {
    const inputValue = event.target.value
    const updated = { ...tileInput }
    updated["price"] = inputValue
    setTileInput(updated)
  }
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
        <Grid
          container
          justifyContent={'center'}
          alignItems='flex-start'
          direction='row'
        >
          <Grid item sm='7' xs='12'>
            <Grid container>
              <Grid item xs='12'>
                <Grid
                  container
                  justifyContent={'space-between'}
                  alignItems='center'
                >
                  <Grid item>
                    <Typography variant='h5' fontWeight={600}>
                      All Tiles
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
                      <Grid item xs='4'>
                        <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                          Tile Name
                        </Typography>
                      </Grid>
                      <Grid item xs='2'>
                        <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                          Color Pattern
                        </Typography>
                      </Grid>
                      <Grid item xs='2'>
                        <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                          Tag
                        </Typography>
                      </Grid>
                      <Grid item xs='2'>
                        <Typography variant='body2' sx={{ color: '#9CA3AF' }}>
                          Action
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {tiles.map((tile_) => (
                    <Grid key={tile_.id} item>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          borderTop: "1px solid #ECEDF0",
                          paddingBottom: "20px",
                          paddingTop: "15px"
                        }}
                      >
                        <Grid item xs="1">
                          <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs="4">
                          <Grid container alignItems={"center"}>
                            <Grid item>
                              <img
                                style={{
                                  width: "45px",
                                  height: "45px",
                                  borderRadius: "10px"
                                }}
                                src={tile_.img}
                              />
                            </Grid>
                            <Grid item ml={1}>
                              <Typography variant="body2">
                                {tile_.name}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs="2">
                          <Typography variant="body2">
                            {tile_.color_pattern}
                          </Typography>
                        </Grid>
                        <Grid item xs="2">
                          <Typography variant="body2">{tile_.tag}</Typography>
                        </Grid>
                        <Grid item xs="2">
                          <Grid container>
                            <Grid>
                              <Typography variant="body2">
                                <Edit
                                  sx={{ marginLeft: "10px", cursor: "pointer" }}
                                />
                              </Typography>
                            </Grid>
                            <Grid ml="1" onClick={(e) => {
                              onDelete(tile_.id)
                            }}>
                              <Typography variant="body2">
                                <DeleteIcon
                                  sx={{ marginLeft: "10px", cursor: "pointer" }}
                                />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item sm='5' xs='12'
          >
            <Grid container>
              <Grid item xs='12'>
                <Grid
                  container
                  justifyContent={'space-between'}
                  alignItems='center'
                >
                  <Grid item
                    sx={{ marginLeft: '20px' }}
                  >
                    <Typography variant='h5' fontWeight={600}>
                      Add New Tile
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                ml='1'
                item mt={3} xs='12'>
                <Grid
                  container
                  bgcolor='white'
                  borderRadius='10px'
                  justifyContent={'center'}
                  direction='column'
                  sx={{ marginLeft: '20px', padding: '20px' }}
                >
                  <Grid item xs='12'>
                    <Grid container direction='column'>
                      <Grid xs='12'>
                        <Grid container sx={{ minHeight: '500px' }} justifyContent={'flex-start'} alignItems='center' direction='column'>
                          <Grid item xs='8'>

                            {svgState ? (
                              <Grid container position='relative' justifyContent={'center'} direction='column' alignItems='center' className='downloadContainer'>
                                <IconButton sx={{ position: 'absolute', right: 3, top: 3 }} onClick={() => setSvg()}>
                                  <Close/>
                                </IconButton>
                                <ReactSVG
                                  afterInjection={(error, svg) => {
                                    if (error) {
                                      console.error(error)
                                      return
                                    }
                                    handleSvg(svg)
                                  }}
                                  beforeInjection={(svg) => {
                                    svg.classList.add("svg-class-name")
                                    svg.setAttribute("id", "current_selected_svg")
                                    svg.setAttribute("style", "width: 100%")
                                  }}
                                  className="wrapper-class-name"
                                  evalScripts="always"
                                  fallback={() => <span>We got some error please try again!</span>}
                                  httpRequestWithCredentials={true}
                                  loading={() => <span>Loading</span>}
                                  onClick={() => {
                                    console.log("wrapper onClick")
                                  }}
                                  renumerateIRIElements={false}
                                  src={svgState}
                                  useRequestCache={false}
                                  wrapper="span"
                                />
                                {/* <img src={svgState} style={{ width: '100%', height: '100%', borderRadius: '20px' }} alt='' /> */}
                              </Grid>
                            ):(
                              <Grid container justifyContent={'center'} direction='column' alignItems='center' className='downloadContainer'>
                                <Grid item>
                                  <img src='/Vector.png' alt='download'/>
                                </Grid>
                                <Grid item sx={{ marginTop: '20px' }}>
                                  <Typography variant='body1' fontWeight={700}>
                                  Drag and drop files or <a onClick={handleClick} style={{ color: '#1573FF', cursor: 'pointer' }}>Browse</a>
                                  </Typography>
                                  <input
                                    type='file'
                                    id='Svg_Input'
                                    ref={hiddenFileInput}
                                    onChange={handleChange}
                                    style={{ display: 'none' }} />
                                  <Typography align='center' sx={{ marginTop: '15px' }} variant='body1' color='#B8B8B8'>
                                  Support SVG file
                                  </Typography>
                                </Grid>
                              </Grid>
                            )}
                          </Grid>
                          <Grid item xs='12'>
                            {errord ? (
                              <Typography sx={{ marginTop: '15px', color: 'red' }} variant='body1'>
                              Please Select svg file !
                              </Typography>
                            ):(
                              <Typography sx={{ marginTop: '15px', color: '#999999' }} variant='body1'>
                              Select pattern color areas
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid xs='12'>
                        <Grid container gap={1} justifyContent={'center'} alignItems='center' sx={{ marginTop: '-50px' }}>
                          <Grid item md='5' xs='12'>
                            <Grid container gap={2}>
                              <Grid xs={12}>
                                <InputLabel>
                                  <Typography variant='h6' fontWeight={700} color='black'>
                                    Tile Name
                                  </Typography>
                                </InputLabel>
                                <OutlinedInput
                                  className='admin_tiles'
                                  fullWidth
                                  value={tileInput.name}
                                  onChange={handleName}
                                  sx={{ marginTop: '5px' }}
                                  id="outlined-adornment-weight"
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight'
                                  }}
                                />
                              </Grid>
                              <Grid xs={12}>
                                <InputLabel>
                                  <Typography variant='h6' fontWeight={700} color='black'>
                                    Sqm Price
                                  </Typography>
                                </InputLabel>
                                <OutlinedInput
                                  className='admin_tiles'
                                  fullWidth
                                  value={tileInput.price}
                                  onChange={handlePrice}
                                  sx={{ marginTop: '5px' }}
                                  id="outlined-adornment-weight"
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    'aria-label': 'weight'
                                  }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item md='5' sx={{ marginLeft: '30px' }} xs='12'>
                            <Grid container gap={6}>
                              <Grid xs={12}>
                                <Grid container gap={1}>
                                  <Grid item xs='12'>
                                    <Typography variant='h6' fontWeight={700}>Tile Tag</Typography>
                                  </Grid>
                                  <Grid item sx={{ marginTop: '5px' }} xs='5'>
                                    <Button
                                      sx={{
                                        "borderColor": 'black',
                                        "zIndex": 2,
                                        "marginTop": "-10px",
                                        "height": "55px",
                                        "borderRadius": 100,
                                        "color": 'black',
                                        "padding": 1,
                                        '&:focus': {
                                          backgroundColor: '#262626',
                                          color: 'white'
                                        }
                                      }}
                                      onClick={selectTile}
                                      variant='outlined'
                                      fullWidth
                                    >
                                      Tile
                                    </Button>
                                  </Grid>
                                  <Grid item xs='5'>
                                    <Button
                                      onClick={selectHexagon}
                                      sx={{
                                        "borderColor": 'black',
                                        "zIndex": 2,
                                        "borderRadius": 100,
                                        "marginTop": "-5px",
                                        "height": "55px",
                                        "color": 'black',
                                        "padding": 1,
                                        '&:focus': {
                                          backgroundColor: '#262626',
                                          color: 'white'
                                        }
                                      }}
                                      fullWidth
                                      variant='outlined'
                                    >
                                      Hexagon
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid xs={12}>
                                <Grid container gap={1}>
                                  <Grid item xs='5'>
                                    <Button
                                      sx={{
                                        "backgroundColor": '#EFEFEF',
                                        "borderColor": '#EFEFEF',
                                        "padding": 1,
                                        "zIndex": 2,
                                        "height": "55px",
                                        "borderRadius": 100,
                                        "color": 'black'
                                      }}
                                      variant='outlined'
                                      fullWidth
                                    >
                                      Cancel
                                    </Button>
                                  </Grid>
                                  <Grid item xs='6'>
                                    <Button
                                      sx={{
                                        "backgroundColor": '#E7C8CD',
                                        "borderColor": '#E7C8CD',
                                        "padding": 1,
                                        "zIndex": 2,
                                        "borderRadius": 100,
                                        "height": "55px",
                                        "color": 'black',
                                        '&:focus': {
                                          backgroundColor: '#E7C8CD',
                                          color: 'black',
                                          borderColor: '#E7C8CD'
                                        },
                                        '&:hover': {
                                          backgroundColor: '#E7C8CD',
                                          color: 'black',
                                          borderColor: '#E7C8CD'
                                        }
                                      }}
                                      onClick={onAddTile}
                                      fullWidth
                                      variant='outlined'
                                    >
                                      <Add></Add>
                                      Add Tile
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
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

export default AdminTiles
