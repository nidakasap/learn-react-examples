import React from 'react'
import Msg from './Msg'

const Person = ({name, img, tel}) => {
    // const{name, img, tel} =props
  return (
    <div>
        <h2>{name}</h2>
        <Msg phoneNumber={tel}/>
        <img src={img} alt="" />
    </div>
    
  )
}

export default Person