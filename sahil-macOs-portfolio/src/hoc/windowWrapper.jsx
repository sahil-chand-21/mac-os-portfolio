import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";

const windowWrapper = (Component,windowKey) => {
  const Wrapped=(props)=>{
    const {focusWindow,windows}=useWindowStore();
    const{ isOpen,zIndex }=windows[windowKey];
    const ref =useRef(null);

    useGSAP(()=>{
      const el=ref.current;
      if(!el || !isOpen)return;

      el.style.display="block"; // to block all the windows at first


      gsap.fromTo(el,
        {
        scale:0.8 ,opacity:0,y:40
      },
      {scale:1,opacity:1,y:0,duration:0.2, ease:'power3.out'}
    )
    }, [isOpen]);

    // now we are making the window draggable

    useGSAP(()=>{
      const el=ref.current;
      if(!el)return;

    const [instance]=  Draggable.create(el,{ onPress: ()=> focusWindow(windowKey)})

    return ()=> instance.kill();
    },[])

 // below code is to make it visible and block when when click on terminal
    useLayoutEffect(()=>{
      const el=ref.current;
      if(!el) return;

      el.style.display= isOpen ? "block" : "none";

    },[isOpen]);

    
    return (
    <section 
    id={windowKey}
     ref={ref} 
     style={{zIndex}}
     className='absolute'
     >
      <Component {...props}/>
     </section>
    );
  };
    Wrapped.displayName=`WindowWrapper(${Component.displayName || Component.name ||"component"})`;

  return Wrapped;
}

export default windowWrapper