import React from 'react'
import {UseData} from "../../src/context/Context"
function Product() {
  console.log(UseData())
  return (
    <div>Product</div>
  )
}

export default Product