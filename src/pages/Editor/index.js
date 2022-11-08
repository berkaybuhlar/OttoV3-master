import { forwardRef } from 'react'
import { Box, Container, Grid } from '@mui/material'
import TileCategories from '../../components/TileComponents/TileCategories'
import TilePatterns from '../../components/TileComponents/TilePatterns'
import LayingAndPreview from '../../components/TileComponents/LayingAndPreview'
import Tile from '../../components/TileComponents/Tile'
import TileScales from '../../components/TileComponents/TileScales'
import TileFunctions from '../../components/TileComponents/TileFunctions'
import PreviewModal from '../../components/PreviewModal'
const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white'
}
const index = forwardRef((prop, ref) => {
  const {
    scale,
    setScale,
    mode,
    setMode,
    setModal,
    modal,
    preview,
    setPreview,
    currentColor,
    setCurrentColor,
    currentCategory,
    setCurrentCategory,
    currentPattern,
    setCurrentPattern,
    layingTypes,
    setLayingTypes
  }=prop
  const handleClick = () => {
    //
    saveSvgAsPng.saveSvgAsPng(
        document.getElementById('svg-chart'), 'shapes.png', imageOptions
    )
  }
  return (
    <Box mt={12} mb={10}>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={3}
          justifyContent='center'
          alignItems='flex-start'
        >
          <Grid item md={5} sm={12} xs={12}>
            <Tile
              scale={scale}
              ref={ref}
              currentColor={currentColor}
              mode={mode}
              currentPattern={currentPattern}
              setCurrentPattern={setCurrentPattern}
            />
            {
              /*
              <TileScales
              scale={scale}
              currentPattern={currentPattern}
              setScale={setScale}
              mode={mode}
              setMode={setMode}
            />
              */
            }
            <TileFunctions
              ref={ref}
              handleClick={handleClick}
              setCurrentPattern={setCurrentPattern}
              currentPattern={currentPattern}
              currentCategory={currentCategory}
            />
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <TileCategories
              setLayingTypes={setLayingTypes}
              layingTypes={layingTypes}
              currentPattern={currentPattern}
              currentColor={currentColor}
              setCurrentPattern={setCurrentPattern}
              setCurrentColor={setCurrentColor}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
            <TilePatterns
              currentPattern={currentPattern}
              layingTypes={layingTypes}
              currentCategory={currentCategory}
              setLayingTypes={setLayingTypes}
              setCurrentPattern={setCurrentPattern}
            />
            <LayingAndPreview
              setPreview={setPreview}
              setModal={setModal}
              layingTypes={layingTypes}
              setCurrentPattern={setCurrentPattern}
              setLayingTypes={setLayingTypes}
              currentPattern={currentPattern}
            />
          </Grid>
        </Grid>
      </Container>
      <PreviewModal
        modal={modal}
        setModal={setModal}
        ref={ref}
        currentPattern={currentPattern}
        setCurrentPattern={setCurrentPattern}
        currentColor={currentColor}
        preview={preview}
        setPreview={setPreview}
      />
    </Box>
  )
})

export default index
