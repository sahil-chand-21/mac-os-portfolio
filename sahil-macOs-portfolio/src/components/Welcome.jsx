import React, { useRef } from 'react'

const Welcome = () => {
    const titleRef =useRef(null);
    const subtitleRef =useRef(null);
  return (
    <section id="welcome">
        <p ref={subtitleRef}>Hey! This is Sahil ! Welcome to my </p>
        <h1 ref={titleRef} className='mt-7'>portfolio</h1>

        <div className='small-screen'>
            <p>Sorry, we will soon ship it for small screens also.</p>
        </div>
    </section>
  )
}

export default Welcome