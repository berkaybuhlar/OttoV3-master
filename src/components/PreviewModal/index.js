/* eslint-disable max-len */
import React, { forwardRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Grid, Hidden } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PreviewButtons from '../PreviewButtons'
import SvgTile from '../SvgTile'
import Tiles from '../../data/Canvases.json'
import Hexagon from '../../data/Hexagon.json'
import { useCallback, useRef } from 'react'
import { toPng } from 'html-to-image'
import MultiPreview from '../TileComponents/MultiPreview'
import SecondShadow from '../Shadows/Bathroom/second'
import FirstShadow from '../Shadows/Bathroom/first'
import ThirdShadow from '../Shadows/Bathroom/third'
import FourthShadow from '../Shadows/Bathroom/fourth'
import FiveShadow from '../Shadows/Bathroom/five'
import SecondShadowHexa from '../Shadows/Bathroom/Hexagon/secondHexa'
import FirstShadowHexa from '../Shadows/Bathroom/Hexagon/firstHexa'
import ThirdShadowHexa from '../Shadows/Bathroom/Hexagon/thirdHexa'
import FourthShadowHexa from '../Shadows/Bathroom/Hexagon/fourthHexa'
import FiveShadowHexa from '../Shadows/Bathroom/Hexagon/fiveHexa'
import FirstKitchenShadow from '../Shadows/Kitchen/FirstKitchenShadow'
import SecondKitchenShadow from '../Shadows/Kitchen/SecondKitchenShadow'
import ThirdKitchenShadow from '../Shadows/Kitchen/ThirdKitchenShadow'
import FourthKitchenShadow from '../Shadows/Kitchen/FourthKitchenShadow'
import FiveKitchenShadow from '../Shadows/Kitchen/FiveKitchenShadow'
import SixKitchenShadow from '../Shadows/Kitchen/SixKitchenShadow'
import SevenKithcenShadow from '../Shadows/Kitchen/SevenKithcenShadow'
import EightKitchenShadow from '../Shadows/Kitchen/EightKitchenShadow'
import FirstHallwayShadow from '../Shadows/Hallway/FirstHallwayShadow'
import SecondHallwayShadow from '../Shadows/Hallway/SecondHallwayShadow'
import FirstHallwayShadowHexa from '../Shadows/Hallway/Hexagons/FirstHallwayShadowHexa'
import SecondHallwayShadowHexa from '../Shadows/Hallway/Hexagons/SecondHallwayShadowHexa'
import EightKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/EightKitchenShadowHexa'
import SevenKithcenShadowHexa from '../Shadows/Kitchen/Hexagon/SevenKithcenShadowHexa'
import SixKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/SixKitchenShadowHexa'
import FiveKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/FiveKitchenShadowHexa'
import FourthKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/FourthKitchenShadowHexa'
import ThirdKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/ThirdKitchenShadowHexa'
import SecondKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/SecondKitchenShadowHexa'
import FirstKitchenShadowHexa from '../Shadows/Kitchen/Hexagon/FirstKitchenShadowHexa'
import { useReactToPrint } from 'react-to-print'
import { SyncLoader } from 'react-spinners'
import MultiRotateTiles from '../MultipleRotateTiles'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 768,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

const index = forwardRef((prop, ref) => {
  const refc = useRef(null)
  const [load, setLoad]=useState(false)
  const onButtonClick = useCallback(() => {
    if (refc.current === null) {
      return
    }
    setLoad(true)
    toPng(refc.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = 'my-image-name.png'
          link.href = dataUrl
          link.click()
          setLoad(false)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [refc])
  const {
    modal,
    setModal,
    setPreview,
    currentPattern,
    preview,
    currentColor,
    setCurrentPattern
  }=prop
  const Items=
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35
      ]
  const handleClose=() => {
    setModal(!modal)
  }
  const handleReset=() => {
    if (currentPattern.type!==undefined) {
      Hexagon.filter((el) => el.id===currentPattern.id)?.map((data) => (
        setCurrentPattern(data)
      ))
    } else {
      Tiles.filter((el) => el.id===currentPattern.id)?.map((data) => (
        setCurrentPattern(data)
      ))
    }
    setModal(!modal)
  }
  return (
    <Modal
      open={modal}
      onClose={load ? null:handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
      >
        <Grid item sx={{
          display: load ? 'none' :null
        }} position='absolute' top={7} right={7}>
          <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose}/>
        </Grid>
        <Grid container position={'relative'} rowGap={3}>
          <Grid
            sx={{
              display: load ? null :'none',
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 8,
              backgroundColor: 'white',
              opacity: '0.8'
            }}
            container justifyContent={'center'} direction='column' alignItems='center'>
            <Grid item>
              <SyncLoader color='#000000' />
            </Grid>
            <Grid mt={3} item>
              <Typography variant='body2' fontWeight={700}>Please wait a moment</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems={'center'} justifyContent='center'>
              <Grid item>
                <Box height='550px' sx={{ marginTop: '-130px' }} ref={refc} width='650px' position={'relative'} zIndex={3} >
                  {preview==='Hallway' ? (
                    <Grid
                      container
                      sx={{ width: '100%' }}
                      justifyContent='center'
                      alignItems='center'
                    >
                      <div className='Hallway' />
                      <div className={currentPattern.type==='Hexagon' ?
                      ('Hallway_plane_hexagon'):(`Hallway_plane`)}
                      >
                        <Grid container width='100%' sx={{ marginTop: currentPattern.type==='Hexagon' ?
                      ('50px'):(`140px`) }}>
                          {currentPattern.type==='Hexagon' ? (
                            <Grid position='relative'>
                              <Grid
                                item
                                className='polygon_container_modal_hallway'
                              >
                                <MultiPreview
                                  ref={ref}
                                  currentPattern={currentPattern}
                                  setCurrentPattern={setCurrentPattern}
                                  currentColor={currentColor}
                                />
                              </Grid>
                            </Grid>
                          ):(
                            Items.map((data) => (
                              <>
                                <Grid
                                  item
                                  key={data}
                                  className={`Hallway_cube_multiple`}
                                >
                                  <MultiRotateTiles
                                    ref={ref}
                                    type='67'
                                    currentPattern={currentPattern}
                                    setCurrentPattern={setCurrentPattern}
                                    currentColor={currentColor}
                                  />
                                </Grid>
                              </>
                            )).slice(0, 12))}
                          <Hidden xsDown={currentPattern.type==='Hexagon'} xsUp={currentPattern.type==='Hexagon'}>
                          </Hidden>
                        </Grid>
                      </div>
                    </Grid>
                  ):null}
                  {preview==='Kitchen' ? (
                    <Grid
                      container
                      sx={{ width: '100%' }}
                      justifyContent='center'
                      alignItems='center'ref={refc}
                    >
                      <div className='Kitchen' />
                      <div className={currentPattern.type==='Hexagon'?
                       ('Kitchen_plane_hexagon'):(`Kitchen_plane`)}>
                        <Grid container width='100%' position={'relative'}>
                          {currentPattern.type==='Hexagon' ? (
                              <Grid position='relative'>
                                <Grid item className='polygon_container_modal'>
                                  <MultiPreview
                                    ref={ref}
                                    currentPattern={currentPattern}
                                    setCurrentPattern={setCurrentPattern}
                                    currentColor={currentColor}
                                  />
                                  <FirstKitchenShadowHexa />
                                  <SecondKitchenShadowHexa />
                                  <ThirdKitchenShadowHexa />
                                  <FourthKitchenShadowHexa />
                                  <FiveKitchenShadowHexa />
                                  <SixKitchenShadowHexa />
                                  <SevenKithcenShadowHexa />
                                  <EightKitchenShadowHexa />
                                </Grid>
                              </Grid>
                          ):(
                            Items.map((data) => (
                              <Grid
                                item
                                key={data}
                                className={`Kitchen_cube_multiple`}
                              >
                                <MultiRotateTiles
                                  ref={ref}
                                  type='59.5'
                                  currentPattern={currentPattern}
                                  setCurrentPattern={setCurrentPattern}
                                  currentColor={currentColor}
                                />
                              </Grid>
                            ))
                          ).slice(0, 8)}
                          <Hidden xsDown={currentPattern.type==='Hexagon'} xsUp={currentPattern.type==='Hexagon'}>
                            <FirstKitchenShadow />
                            <SecondKitchenShadow />
                            <ThirdKitchenShadow />
                            <FourthKitchenShadow />
                            <FiveKitchenShadow />
                            <SixKitchenShadow />
                            <SevenKithcenShadow />
                            <EightKitchenShadow />
                          </Hidden>
                        </Grid>
                      </div>
                    </Grid>
                  ):null}
                  {preview==='Bathroom' ? (
                     <Grid
                       container
                       justifyContent='center'
                       alignItems='center'
                       height='500px'ref={refc}
                     >
                       <div className='Bathroom' />
                       <div className={currentPattern.type==='Hexagon'?
                       ('Bathroom_plane_hexagon'):(`Bathroom_plane`)}
                       >
                         <Grid container width='100%' position={'relative'}>
                           {currentPattern.type==='Hexagon' ? (
                            <Grid position='relative'>
                              <Grid
                                item
                                className='polygon_container_modal_bathroom'
                              >
                                <MultiPreview
                                  ref={ref}
                                  currentPattern={currentPattern}
                                  setCurrentPattern={setCurrentPattern}
                                  currentColor={currentColor}
                                />
                              </Grid>
                              <FirstShadowHexa />
                              <SecondShadowHexa />
                              <ThirdShadowHexa />
                              <FourthShadowHexa />
                              <FiveShadowHexa />
                            </Grid>
                          ):(
                           Items.map((data) => (
                             <Grid
                               item
                               key={data}
                               className={`Bathroom_cube`}
                             >
                               <MultiRotateTiles
                                 ref={ref}
                                 type='59'
                                 currentPattern={currentPattern}
                                 setCurrentPattern={setCurrentPattern}
                                 currentColor={currentColor}
                               />
                             </Grid>
                           )).slice(0, 15))}
                           <Hidden xsDown={currentPattern.type==='Hexagon'} xsUp={currentPattern.type==='Hexagon'}>
                             <FirstShadow />
                             <SecondShadow />
                             <ThirdShadow />
                             <FourthShadow />
                             <FiveShadow />
                           </Hidden>
                         </Grid>
                       </div>
                       <div className={currentPattern.type==='Hexagon'?
                       ('Bathroom_plane_hexagon_floor'):(`Bathroom_plane_floor`)}
                       >
                         <Grid container width='100%' position={'relative'}>
                           {currentPattern.type==='Hexagon' ? (
                            <Grid
                              item
                              className='polygon_container_modal_bathroom'
                            >
                              <MultiPreview
                                ref={ref}
                                currentPattern={currentPattern}
                                setCurrentPattern={setCurrentPattern}
                                currentColor={currentColor}
                              />
                            </Grid>
                          ):(
                           Items.filter((el) => el!==1).map((data) => (
                             <Grid
                               item
                               key={data}
                               className={`Bathroom_cube_floor`}
                             >
                               <MultiRotateTiles
                                 ref={ref}
                                 type='63'
                                 currentPattern={currentPattern}
                                 setCurrentPattern={setCurrentPattern}
                                 currentColor={currentColor}
                               />
                             </Grid>
                           )).slice(0, 10))}
                         </Grid>
                       </div>
                     </Grid>
                  ):null}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container mt={3} rowGap={2}>
              <Grid item xs={12} sx={{ zIndex: 4, backgroundColor: 'white', marginLeft: '-7px' }}>
                <Typography variant='body1' fontWeight={700}>
                    Design Preview
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='flex-start'
                >
                  <Grid item>
                    <PreviewButtons
                      modal={modal}
                      setModal={setModal}
                      setPreview={setPreview}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Button
                          variant='contained'
                          onClick={handleReset}
                          sx={{
                            "boxShadow": 'none',
                            "border": '1px solid black',
                            "backgroundColor": 'white',
                            "color": 'black',
                            "zIndex": 2,
                            '&:hover': {
                              backgroundColor: 'white',
                              boxShadow: 'none'
                            }
                          }}
                        >
                         Reset
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant='contained'
                          onClick={onButtonClick}
                          sx={{
                            "boxShadow": 'none',
                            "backgroundColor": '#E7C8CD',
                            "color": 'black',
                            "zIndex": 2,
                            '&:hover': {
                              backgroundColor: '#E7C8CD',
                              boxShadow: 'none'
                            }
                          }}
                        >
                            Download Image
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
})

export default index
