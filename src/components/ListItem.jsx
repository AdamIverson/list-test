import React from 'react'

function ListItem({ color }) {
  console.log("LIST ITEM color", color)
  return (
    <li>{color}</li>
  )
}

export default ListItem