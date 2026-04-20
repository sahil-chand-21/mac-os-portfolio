import { locations } from '#constants'
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import React from 'react'
import { Draggable } from 'gsap/all';
import useWindowStore from '#store/window';
import useLocation from '#store/location';

const projects =locations.work?.children ?? [];

const Folder = () => {

    useGSAP(()=>{
        Draggable.create(".folder");
    },[]);
    const {setActiveLocation}=useLocation();
    const {openWindow}= useWindowStore();

    const openfolder=(project)=>{
        openWindow("finder") // it will open the window
        setActiveLocation(project);


    }

  return (
    <div id='home'>
        <ul>
            {projects.map((project)=>(
                <li 
                onClick={()=> openfolder(project)}
                key={project.id}
                className={clsx("group folder",project.windowPosition)}// given the classname of all the folder is folder to use draggabe
                >
                    <img src="/images/folder.png" alt={project.name} />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Folder