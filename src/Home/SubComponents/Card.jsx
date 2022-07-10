import React from 'react'

const Card = () => {
  return (
        <section className='category'>
        {/* <h1 className='heading'>Our Branches</h1> */}
        <a href="#" className='box'>
            <img src='images/Depression.jpeg'/>
            <h3>Depression</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/anx.jpg'/>
            <h3>Anxiety Disorder</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/panic.webp'/>
            <h3>Panic Disorder</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/ocd.jpg'/>
            <h3>OCD</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/ptsd.jpg'/>
            <h3>PTSD</h3>
        </a>
    </section>
  )
}

export default Card