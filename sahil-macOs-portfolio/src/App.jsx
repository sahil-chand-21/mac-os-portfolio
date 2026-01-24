import React from 'react'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import  Terminal from './apps/Terminal';
import Safari from "./apps/Safari";
import Resume from "./apps/Resume";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
    <Navbar/>
    <Resume/>
    <Welcome/>
    <Dock/>

    <Terminal/>
    <Safari/>
   
    </main>
  )
}

export default App
