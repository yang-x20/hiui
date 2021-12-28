import React from 'react'
import Slider from '../src'

export const Disabled = () => {
  return (
    <>
      <h1>Disabled</h1>
      <div className="slider-disabled__wrap">
        <Slider
          style={{ width: 300 }}
          onChange={(value) => {
            console.log(value)
          }}
          defaultValue={80}
          disabled
        ></Slider>
      </div>
    </>
  )
}
