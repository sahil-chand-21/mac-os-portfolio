// to show the image window
import WindowControls from '#components/WindowControls'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Imageview = () => {
    const {windows}= useWindowStore();
    const data=windows.imgfile?.data;

    if(!data) return null;
    const {name, imageUrl}= data;
  return (
    <>
    <div id='window-header'>
        <WindowControls target="imgfile"/>
        <h2>{name}</h2>
    </div>

    <div className='p-5 bg-white'>
        <div className='w-full'>
            <img src={imageUrl} alt={name}  className='w-full max-h[70vh] object-contain rounded'/>
        </div>
    </div>
    </>
  )
}

const ImageviewWindow= windowWrapper(Imageview,"imgfile")
export default ImageviewWindow