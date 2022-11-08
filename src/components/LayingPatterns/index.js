/* eslint-disable max-len */
import React from 'react'
import '../SvgTile/SvgTile.css'
const index = ({ Tile }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 341.34 341.34" xmlSpace="preserve">
        {Tile.type ? (
          <g id="bg_00000110472443024675350580000007260784893506933161_">
            <g className='st1'>
              <polygon className="st1" fill={Tile.object_bg_color} points="253.47,24.52 87.87,24.52 5.06,167.94 87.87,311.36 253.47,311.36 336.28,167.94 		"/>
            </g>
          </g>
        ):(
          <g id="bg_00000110472443024675350580000007260784893506933161_">
            <g id="bg">
              <g className='st1'>
                <rect x="0.86" y="0.86" className='st1' fill={Tile.object_bg_color} width="339.63" height="339.63"/>
              </g>
            </g>
          </g>
        )}
        {Tile.bg_group_item_object_variables?.map((objectData, objectIndex) => (
          <g key={objectIndex}>
            {objectData.bg_group_child_object==="polygon" ? (
                      <polygon
                        key={objectIndex}
                        className='st1'
                        fill={objectData.fill}
                        points={objectData.value}
                      />
                    ):null}
            {objectData.bg_group_child_object==="path" ? (
                      <path
                        key={objectIndex}
                        className="st1"
                        fill={objectData.fill}
                        d={objectData.value}
                      />
                    ):null}
            {objectData.bg_group_child_object==="rect" ? (
                      <rect
                        key={objectIndex}
                        className="st1"
                        fill={objectData.fill}
                        x={objectData.x}
                        y={objectData.y}
                        transform={objectData.transform ? objectData.transform : null}
                        width={objectData.width}
                        height={objectData.height}
                      />
                    ):null}
            {objectData.bg_group_child_object==="ellipse" ? (
                      <ellipse
                        key={objectIndex}
                        className="st1"
                        fill={objectData.fill}
                        cx={objectData.cx}
                        cy={objectData.cy}
                        rx={objectData.rx}
                        ry={objectData.ry}
                      />
                    ):null}
            {objectData.bg_group_child_object==="circle" ? (
                      <circle
                        key={objectIndex}
                        className="st1"
                        fill={objectData.fill}
                        cx={objectData.cx}
                        cy={objectData.cy}
                        r={objectData.r}
                      />
                    ):null}
          </g>
        ))}
      </svg>
    </div>
  )
}

export default index
