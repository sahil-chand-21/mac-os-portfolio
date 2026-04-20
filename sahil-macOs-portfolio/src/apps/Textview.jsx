// made this to view the text or description of the data
import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Textview = () => {

  const {windows} = useWindowStore();
  const data= windows.txtfile?.data;

  if(!data) return null;

  const{description,heading}=data;
  return (
    <>
    <div id='window-header'>
        <WindowControls target="txtfile"/>
        <h2>{heading}</h2>
    </div>
    <h2>{heading}</h2>
    <div className='des'>{description.map((txt,index)=>(
      <p className='pt-4 ' key={index} > {txt} </p>
    ))}</div>
    </>
  )
}


const TextviewWindow=windowWrapper(Textview,"txtfile")
export default TextviewWindow