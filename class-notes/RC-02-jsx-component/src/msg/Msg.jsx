//import React from 'react'
import image1 from '../img/dog.jpeg'


//external css direkt import edilir
import './Msg.css'

const Msg = () => {
  const styleImg = {    
    border: '2px solid peru',
    width : '250px'
  }
  const styleP= {    
    color:'peru'
  }
  return (
   <div>
    {/* inline styling */}
    <h2 style={{color:'red',fontSize:'40px'}}>This Msg Page!!</h2>

    <p style={styleP}>Welcome</p>

    <img className='catImage'
    src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg" 
    alt="" style={styleImg} />
    <img 
    src={image1} alt="" style={styleImg} />
    <img style={styleImg}
    src="./assets/cat.jpeg" alt="" /> 
    {/* publicte oldugu icin */}
   </div>
  )
}

export default Msg