import React from 'react'
import image from "../../src/products_data/car2.png"
import vector1 from "../../src/products_data/Vector-1.png"
import vector from "../../src/products_data/Vector.png"
function ProductItem(props) {
  const datum =props.data
  return (
  <div className ="product_container_div_op">
<img src={image}  alt={datum.class}/>
<div className="info">
  <p className='name'>{datum.name}</p>
  <p>{datum.class}</p>
</div>
<p className='description'>{datum.description}</p>

<div className="bottom">

<div className="left">
  <div className="left_content">
    <img src={vector} alt="" />
    <p>{datum.seats}</p>
  </div>
</div>

<img src={vector1} alt="" />
    <p>{datum.luggage}</p>
</div>
    <div className="right">
      <button>-</button>
      <span>3</span>
      <button>+</button>
    </div>
  </div>
  )
}

export default ProductItem