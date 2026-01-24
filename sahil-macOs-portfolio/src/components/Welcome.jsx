import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const FONT_WEIGHTS={
  subtitle:{min:100,max:400,default:100},
  title:{min:400,max:800,default:400},
};

const renderText=( text,className,baseWeight=400)=>{

  return [...text].map((char,i)=>(
    <span key={i} className={className}
    style={{fontVariationSettings: ` 'wght' ${baseWeight}`}}
    >
      {char=== " "? "\u00A0":char}
    </span>
  ))
};

const hoveringText=(container,type)=>{
  if (!container) return;

  const letters =container.querySelectorAll("span");
  const {min,max,default:base}=FONT_WEIGHTS[type];

  const animationLetter=(letter,weight, duration=0.25)=>{
   
    return gsap.to(letter,
      { duration,
        ease:"power2.out",
        fontVariationSettings: `'wght' ${weight}`,

    });
  }
  const handleMouseMove=(e)=>{
    const {left}=container.getBoundingClientRect();
    const mouseX=e.clientX -left;

    letters.forEach((letter) => {
      const {left:l ,width:w}=letter.getBoundingClientRect();
      const distance=Math.abs(mouseX-(l-left+w/2));
      const intensity=Math.exp(-(distance**2)/2000);

      animationLetter(letter,min+(max-min)*intensity)
      
    });
  }
  const handleMouseLave=(e)=>{
    letters.forEach((letter)=>animationLetter(letter,base,0.3))
  }
  container.addEventListener("mousemove",handleMouseMove);
  container.addEventListener("mouseleave",handleMouseLave);
  return ()=>{
    container.removeEventListener("mousemove",handleMouseMove);
    container.removeEventListener("mouseleave",handleMouseLave);
  }
};


const Welcome = () => {
    const titleRef =useRef(null);
    const subtitleRef =useRef(null);

    useGSAP(()=>{

      hoveringText(titleRef.current,"title");
      hoveringText(subtitleRef.current,"subtitle");
    
      
    },[])
  return (
    <section id="welcome">
        <p ref={subtitleRef}>
          { renderText ("Hey! This is Sahil ! Welcome to my",
            'text-3xl font-georama',
            100)}
        </p>
        <h1 ref={titleRef} className='mt-7'>
          
          {renderText( "portfolio","text-9xl italic font-georama ")}</h1>

        <div className='small-screen'>
            <p>Sorry, we will soon ship it for small screens also.</p>
        </div>
    </section>
  )
}

export default Welcome