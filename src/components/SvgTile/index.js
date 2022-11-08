import React, { forwardRef, Fragment, useState } from 'react'
import './SvgTile.css'

const index = forwardRef((prop, ref) => {
  const { currentPattern, setCurrentPattern, currentColor }=prop
  const [onHover, setOnHover]=useState(false)
  const [onBgHover, setBgOnHover]=useState(false)
  const [onHoverId, setOnHoverId]=useState(0)
  const handleColored= ({ data, bgcolorto }) => {
    const UsedColors=[]
    const CurrentNews=[]
    const Changed=[]
    const FirstItems=[]
    currentPattern.bg_group_item_object_variables?.filter(
        (fil) => fil.bg_group_child_id!==data.bg_group_child_id)
        .map((datas) => {
          CurrentNews.push(datas)
        }
        )
    currentPattern.bg_group_item_object_variables?.filter(
        (fil) => fil.bg_group_child_id===data.bg_group_child_id)
        .map((datas) => {
          Changed.push(datas)
        }
        )
    if (currentPattern.object_used_colors.includes(currentColor)) {
      UsedColors.push(...currentPattern.object_used_colors)
    } else {
      UsedColors.push(...currentPattern.object_used_colors.filter((el) => el!==data.fill), currentColor)
    }
    if (UsedColors.includes(data.fill)) {
      UsedColors===UsedColors.filter((el) => el!==data.fill)
    }
    console.log(UsedColors)
    Changed?.map((el) => {
      if (el.bg_group_child_object==="polygon") {
        if (el.first) {
          const NewPolygonData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            name: el.name,
            first: true,
            value: el.value
          }
          FirstItems.unshift(NewPolygonData)
        } else {
          const NewPolygonData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            name: el.name,
            value: el.value
          }
          CurrentNews.push(NewPolygonData)
        }
      } else if (el.bg_group_child_object==='path') {
        if (el.first) {
          const NewPathData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            name: el.name,
            value: el.value,
            first: true
          }
          FirstItems.unshift(NewPathData)
        } else {
          const NewPathData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            name: el.name,
            value: el.value
          }
          CurrentNews.push(NewPathData)
        }
      } else if (el.bg_group_child_object==='rect') {
        if (el.first) {
          const NewRectData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            x: el.x,
            y: el.y,
            transform: el.transform ? el.transform : null,
            height: el.height,
            width: el.width,
            first: true
          }
          FirstItems.unshift(NewRectData)
        } else {
          const NewRectData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            x: el.x,
            y: el.y,
            transform: el.transform ? el.transform : null,
            height: el.height,
            width: el.width
          }
          CurrentNews.push(NewRectData)
        }
      } else if (el.bg_group_child_object==='ellipse') {
        if (el.first) {
          const NewEllipseData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            cx: el.cx,
            cy: el.cy,
            rx: el.rx,
            ry: el.ry,
            first: true
          }
          FirstItems.unshift(NewEllipseData)
        } else {
          const NewEllipseData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            cx: el.cx,
            cy: el.cy,
            rx: el.rx,
            ry: el.ry
          }
          CurrentNews.push(NewEllipseData)
        }
      } else if (el.bg_group_child_object==='circle') {
        if (el.bg_group_child_object.first) {
          const NewCirclenData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            cx: el.cx,
            cy: el.cy,
            r: el.r,
            first: true
          }
          FirstItems.unshift(NewCirclenData)
        } else {
          const NewCirclenData={
            bg_group_child_id: el.bg_group_child_id,
            bg_group_child_object: el.bg_group_child_object,
            fill: currentColor,
            cx: el.cx,
            cy: el.cy,
            r: el.r
          }
          CurrentNews.push(NewCirclenData)
        }
      }
    })
    CurrentNews.unshift(...FirstItems)
    if (bgcolorto) {
      setCurrentPattern({
        ...currentPattern,
        bg_group_item_object_variables: CurrentNews,
        object_bg_color: currentColor,
        object_used_colors: UsedColors
      })
    } else {
      setCurrentPattern({
        ...currentPattern,
        bg_group_item_object_variables: CurrentNews,
        object_used_colors: UsedColors
      })
    }
  }
  const handleColoredBg=(item) => {
    if (currentPattern.id !== 0) {
      if (currentPattern.object_name==="Santorini") {
        handleColored({
          data: currentPattern.bg_group_item_object_variables[2],
          bgcolorto: true
        })
      } else {
        const UsedColors=[]
        if (currentPattern.object_used_colors.includes(currentColor)) {
          UsedColors.push(...currentPattern.object_used_colors)
        } else {
          UsedColors.push(...currentPattern.object_used_colors.filter((el) => el!==item), currentColor)
        }
        setCurrentPattern({
          ...currentPattern,
          object_bg_color: currentColor,
          object_used_colors: UsedColors
        })
      }
    }
  }

  return (
    <Fragment>
      {currentPattern.id===0 ? (
        <div style={{ height: '100%', width: '100%', textAlign: 'center', position: 'relative' }}>
          <div className='burn_svg_tile' style={{ display: currentPattern.id===0 ? 'none':null }}/>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 341.34 341.34" xmlSpace="preserve">
            {currentPattern.type ? (
            <g id="bg_00000110472443024675350580000007260784893506933161_">
              <g>
                <polygon
                  className="st1"
                  fill={currentPattern.object_bg_color}
                  onClick={() => handleColoredBg(currentPattern.object_bg_color)}
                  points="253.47,24.52 87.87,24.52 5.06,
                  167.94 87.87,311.36 253.47,311.36 336.28,167.94"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  fontSize={'11px'}
                  textAnchor="middle"
                >
                  {currentPattern.object_name}
                </text>
              </g>
            </g>
          ):(
            <g id="bg_00000110472443024675350580000007260784893506933161_">
              <g id="bg">
                <g>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    fontSize={'11px'}
                    textAnchor="middle">
                    {currentPattern.object_name}
                  </text>
                  <path
                    d="M339.63,1.71v337.92H1.71V1.71H339.63
                   M341.34,0H0v341.33h341.33V0L341.34,0z"
                  />
                </g>
              </g>
            </g>
          )}
          </svg>
        </div>
      ):(
        <div style={{ height: '100%', width: '100%', position: 'relative' }} ref={ref}>
          <div className='burn_svg_tile' style={{ display: currentPattern.id===0 ? 'none':null }}/>
          <svg version="1.1" opacity={0.95} id={"svg-chart"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 341.34 341.34" xmlSpace="preserve">
            {currentPattern.type ? (
            <g id="bg_00000110472443024675350580000007260784893506933161_">
              <g>
                <polygon
                  className="st1"
                  onMouseLeave={() => setBgOnHover(false)}
                  onMouseEnter={() => setBgOnHover(true)}
                  fill={onBgHover ?
                    currentColor :
                    currentPattern.object_bg_color
                  }
                  onClick={() => handleColoredBg(currentPattern.object_bg_color)}
                  points="253.47,24.52 87.87,24.52 5.06,167.94
                87.87,311.36 253.47,311.36 336.28,167.94 		"
                />
              </g>
            </g>
          ):(
            <g id="bg_00000110472443024675350580000007260784893506933161_">
              <g id="bg">
                <g>
                  <rect
                    x="0.86"
                    y="0.86"
                    className="st1"
                    onMouseLeave={() => setBgOnHover(false)}
                    onMouseEnter={() => setBgOnHover(true)}
                    fill={onBgHover ?
                      currentColor :
                      currentPattern.object_bg_color
                    }
                    onClick={() => handleColoredBg(currentPattern.object_bg_color)}
                    width="339.63"
                    height="339.63"
                  />
                </g>
              </g>
            </g>
          )}
            {currentPattern.bg_group_item_object_variables?.map(
                (objectData, objectIndex) => (
                  <g key={objectIndex}>
                    {objectData.bg_group_child_object==="polygon" ? (
                    <polygon
                      key={objectIndex}
                      className="st1"
                      onMouseLeave={() => {
                        setOnHover(false)
                        setOnHoverId(0)
                      }}
                      onMouseEnter={() => {
                        setOnHover(true)
                        setOnHoverId(objectData.bg_group_child_id)
                      }}
                      fill={onHover &&
                        onHoverId===objectData.bg_group_child_id ?
                        currentColor :
                         objectData.fill
                      }
                      points={objectData.value}
                      onClick={() => handleColored({ "data": objectData })}
                    />
                  ):null}
                    {objectData.bg_group_child_object==="path" ? (
                    <path
                      key={objectIndex}
                      className="st1"
                      onMouseLeave={() => {
                        setOnHover(false)
                        setOnHoverId(0)
                      }}
                      onMouseEnter={() => {
                        setOnHover(true)
                        setOnHoverId(objectData.bg_group_child_id)
                      }}
                      fill={onHover &&
                        onHoverId===objectData.bg_group_child_id ?
                        currentColor :
                        objectData.fill
                      }
                      d={objectData.value}
                      onClick={() => handleColored({ "data": objectData })}
                    />
                  ):null}
                    {objectData.bg_group_child_object==="rect" ? (
                    <rect
                      className="st1"
                      key={objectIndex}
                      onMouseLeave={() => {
                        setOnHover(false)
                        setOnHoverId(0)
                      }}
                      onMouseEnter={() => {
                        setOnHover(true)
                        setOnHoverId(objectData.bg_group_child_id)
                      }}
                      fill={onHover &&
                        onHoverId===objectData.bg_group_child_id ?
                        currentColor :
                        objectData.fill
                      }
                      x={objectData.x}
                      y={objectData.y}
                      transform={objectData.transform ?
                        objectData.transform : null
                      }
                      width={objectData.width}
                      height={objectData.height}
                      onClick={() => handleColored({ "data": objectData })}
                    />
                  ):null}
                    {objectData.bg_group_child_object==="ellipse" ? (
                    <ellipse
                      key={objectIndex}
                      className="st1"
                      onMouseLeave={() => {
                        setOnHover(false)
                        setOnHoverId(0)
                      }}
                      onMouseEnter={() => {
                        setOnHover(true)
                        setOnHoverId(objectData.bg_group_child_id)
                      }}
                      fill={onHover &&
                        onHoverId===objectData.bg_group_child_id ?
                        currentColor :
                        objectData.fill
                      }
                      cx={objectData.cx}
                      cy={objectData.cy}
                      rx={objectData.rx}
                      ry={objectData.ry}
                      onClick={() => handleColored({ "data": objectData })}
                    />
                  ):null}
                    {objectData.bg_group_child_object==="circle" ? (
                    <circle
                      key={objectIndex}
                      className="st1"
                      onMouseLeave={() => {
                        setOnHover(false)
                        setOnHoverId(0)
                      }}
                      onMouseEnter={() => {
                        setOnHover(true)
                        setOnHoverId(objectData.bg_group_child_id)
                      }}
                      fill={onHover &&
                        onHoverId===objectData.bg_group_child_id ?
                        currentColor :
                        objectData.fill
                      }
                      cx={objectData.cx}
                      cy={objectData.cy}
                      r={objectData.r}
                      onClick={() =>
                        handleColored({
                          "data": objectData,
                          "type": objectData.bg_group_child_object
                        })
                      }
                    />
                  ):null}
                  </g>
                ))}
          </svg>
        </div>
      )}
    </Fragment>
  )
})

export default index
