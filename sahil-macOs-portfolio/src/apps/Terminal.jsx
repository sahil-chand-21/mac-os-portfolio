import windowWrapper from '#hoc/windowWrapper'
import React from 'react'
import {techStack}from "#constants"
import { Check } from 'lucide-react'
import { Anchor } from 'lucide-react'
import WindowControls from '#components/WindowControls'

const Terminal = () => {
  return (
   
   <>
   <div id='window-header'>
    <WindowControls target="terminal"/>
    <h2>Tech Stack</h2>
   </div>

   <div className='techstack'>
    <p>
        <span className='font-bold'>@sahil %...</span>
        show tech stack 
    </p>
    <div className='label'>
      <p className='w-32 '>Category</p>
      <p>Technology</p>
    </div>
    <ul className='content'>
      {techStack.map(({category ,items})=>(
        <li key={category} className='flex items-center  '>
          <Check className="check  size={20}"/>
          <h3>{category}</h3>
          <ul>
            {items.map((item,i)=>(
              <li key={i}>{item}
              </li>
            ))}
            
          </ul>
        </li>
      ))}
    </ul>

    {/* //for the last msg */}

    <div className='footnote'>
      <p>
        <Check size={30}/>
        5 out of 5 task completed successfully
      </p>
      <p className='text-blue-400'>
        <Anchor/>
        Skills evolve. So should you.</p>
    </div>
     
   </div>
   </>
  )
}

const TerminalWindow=windowWrapper(Terminal, "terminal");


export default TerminalWindow;