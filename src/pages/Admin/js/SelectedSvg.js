/* eslint-disable max-len */

export const handleSvg=(svg) => {
  const Data={
    bg_group_item_object_variables: [

    ]
  }
  svg.childNodes.forEach(function(item) {
    if (item.tagName==='g') {
      item.outerHTML = item.innerHTML
    }
    svg.childNodes.forEach(function(item) {
      if (item.tagName==='g') {
        item.outerHTML = item.innerHTML
      }
      svg.childNodes.forEach(function(item) {
        if (item.tagName==='g') {
          item.outerHTML = item.innerHTML
        }
        svg.childNodes.forEach(function(item) {
          if (item.tagName==='g') {
            item.outerHTML = item.innerHTML
          }
        })
      })
    })
  })
  svg.childNodes.forEach(function(item, index) {
    if (item.tagName==='rect') {
      Data.bg_group_item_object_variables.push(
          {
            bg_group_child_id: index,
            bg_group_child_object: 'rect',
            width: item.getAttribute('width'),
            height: item.getAttribute('height'),
            x: item.getAttribute('x'),
            y: item.getAttribute('y'),
            transform: item.getAttribute('transform')?item.getAttribute('transform'):null,
            fill: '#FFFFFF'
          }
      )
    }
    if (item.tagName==='path') {
      Data.bg_group_item_object_variables.push(
          {
            bg_group_child_id: index,
            bg_group_child_object: 'path',
            name: 'd',
            value: item.getAttribute('d'),
            fill: '#FFFFFF'
          }
      )
    }
    if (item.tagName==='ellipse') {
      Data.bg_group_item_object_variables.push(
          {
            bg_group_child_id: index,
            bg_group_child_object: 'ellipse',
            cx: item.getAttribute('cx'),
            cy: item.getAttribute('cy'),
            rx: item.getAttribute('rx'),
            ry: item.getAttribute('ry'),
            fill: '#FFFFFF'
          }
      )
    }
    if (item.tagName==='polygon') {
      Data.bg_group_item_object_variables.push(
          {
            bg_group_child_id: index,
            bg_group_child_object: 'polygon',
            name: 'points',
            value: item.getAttribute('points'),
            fill: '#FFFFFF'
          }
      )
    }
    if (item.tagName==='circle') {
      Data.bg_group_item_object_variables.push(
          {
            bg_group_child_id: index,
            bg_group_child_object: 'circle',
            cx: item.getAttribute('cx'),
            cy: item.getAttribute('cy'),
            r: item.getAttribute('r'),
            fill: '#FFFFFF'
          }
      )
    }
  })
  return Data
}
