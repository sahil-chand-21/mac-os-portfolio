import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import React from 'react'

const Safari = () => {
  return (
    <>
    <div id='window-header'>
        <WindowControls target= "safari" />
        <p className='text-blue-400 '>here i will add achievements gallery photos</p>
    </div>
    </>
  )
}
const SafariWindow=windowWrapper(Safari,"safari")

export default SafariWindow