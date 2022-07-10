import React from 'react'

const HomeSection = () => {
  return (
    <section className='home'>
    <div className='image'>
        <img src='images/Community.svg' alt=""/>
    </div>

    <div className='content'>
        <h3>Welcome to Menti-World</h3>
        <p>Online People Connecting Platform</p>
        <a href='/register' className='btn'>Get Started</a>
    </div>
    </section>
  )
}

export default HomeSection