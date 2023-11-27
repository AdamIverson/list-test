import React from 'react'
import ListItem from './ListItem'

function List({ colors }) {
  console.log("LIST colors", colors)
  return (
    <ul>
      {colors?.map((color, i) =>
        <ListItem key={i} color={color} />
      )}
    </ul>
  )
}

export default List