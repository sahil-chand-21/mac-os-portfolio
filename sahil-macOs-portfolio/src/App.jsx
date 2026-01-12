import React from 'react'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
    <Navbar/>
    <Welcome/>
    <Dock/>
   
    </main>
  )
}

export default App
