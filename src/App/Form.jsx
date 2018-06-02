import React, { Component, Fragment } from 'react'
import { green } from 'logger'

const Form = ({ children, handleSave }) => {
  // const renderChildren = children.map(c => {
  //   return c
  // })
  return (
    <div>
      {children}
      <button>Cancel</button>
      <button onClick={e => handleSave(e)}>Save</button>

    </div>
  )
}
export default Form
