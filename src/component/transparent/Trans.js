import React from 'react'
import "./trans.css"
function Trans(props) {

  return (
  <section className='transpernt_section'>
<div><h2>{props.title}</h2></div>
<span>{props.title}</span>
  </section>

  )
}

export default Trans