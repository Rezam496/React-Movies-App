import React from 'react'
import { Radio } from 'react-loader-spinner'

function Loader() {
  return (
    <div className="container flex content-center my-32 justify-center">
    <Radio
        visible={true}
        height="80"
        width="80"
        color="#314c6e"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}

export default Loader