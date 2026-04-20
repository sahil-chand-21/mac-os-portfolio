// made this to view the text or description of the data
import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Textview = () => {

  return (
    <>
    <div id='window-header'>
        <WindowControls target="txtfile"/>
        <p> hello</p>
    </div>
    </>
  )
}


const TextviewWindow=windowWrapper(Textview,"txtfile")
export default TextviewWindow