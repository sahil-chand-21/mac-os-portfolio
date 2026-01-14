import React from 'react'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import  Terminal from './apps/Terminal';
import Safari from "./apps/Safari"
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
    <Navbar/>
    <Welcome/>
    <Dock/>

    <Terminal/>
    <Safari/>
   
    </main>
  )
}

export default App
