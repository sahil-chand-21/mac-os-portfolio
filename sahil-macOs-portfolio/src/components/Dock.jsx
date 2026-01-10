import { dockApps } from '#constants';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import {Tooltip} from "react-tooltip";
// import { i } from 'vite/dist/node/chunks/moduleRunnerTransport';
import gsap from 'gsap';
import useWindowStore from '#store/window';


const Dock = () => {
    const dockRef=useRef(null);
    // importing and destructuring the windows and window functions
    const { windows, openWindow, closeWindow, focusWindow } = useWindowStore();

    useGSAP(()=>{
        const dock=dockRef.current;
        if(!dock) return;
        // if something is there in icon boc/dock
        const icons=dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX)=>{
            const{left}=dock.getBoundingClientRect();
            
            icons.forEach((icon)=>{
                const {left:iconLeft,width}=icon.getBoundingClientRect();
                const center = iconLeft - left + width/2;
                const distance= Math.abs(mouseX - center);

                const intensity= Math.exp(-(distance **2.5)/20000);

                gsap.to(icon,{
                    scale: 1+ 0.25 * intensity,
                    y: -15 * intensity,
                    duration :0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove=(e)=>{
            const {left}= dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const resetIcons=()=>{
            icons.forEach((icon)=>{
                gsap.to(icon,{
                    scale:1,
                    y:0,
                    duration:0.3,
                    ease:"power1.out",
                });
            })
        }

        dock.addEventListener('mousemove',handleMouseMove);
        dock.addEventListener('mouseleave',resetIcons);

        // cleaning up
        return ()=>{
        dock.removeEventListener("mousemove",handleMouseMove);
        dock.removeEventListener("mouseleave",resetIcons);
        };
    },[]);






    const toggleApp=(app)=>{
        if(!app.canOpen) return;

        const win = windows[app.id];
        if(!win) return;

        if(win.isOpen){
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
        console.log(win);
        
    };

  return (
    <section id="dock">
        <div ref={dockRef} className='dock-container'>
            {dockApps.map(({id,name,icon,canOpen})=>(
                <div key={id} className='relative flex justify-center'>
                    <button type='button' 
                    className='dock-icon'
                    aria-label={name}
                    data-tooltip-id="dock-tooltip" // this is used to show the msg that comes upon hover
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                    disabled={!canOpen}
                    onClick={()=>toggleApp({id,canOpen})}
                    >
                        <img src={`/images/${icon}`}
                        alt={name}
                        loading='lazy'
                        className={canOpen ?'' :'opacity-10'} // this is done if some app i dont want to open 
                        />
                    </button>
                </div>
            ))}
        </div>
        <Tooltip id='dock-tooltip' place='top' className='tooltip' />
    </section>
  )
}

export default Dock