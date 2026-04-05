import React from 'react'
import  { useState } from 'react'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { gsap } from "gsap";
import { Draggable } from "gsap/draggable";
import  Terminal from './apps/Terminal';
import Safari from "./apps/Safari";
import Resume from "./apps/Resume";
import  Finder  from './apps/Finder';

import BootLoader from "#components/BootLoader";
gsap.registerPlugin(Draggable);
const App = () => {

  const [booted, setBooted] = useState(false); 
  return booted ?  (
    <main>
    <Navbar/>
    <Resume/>
    <Welcome/>
    <Dock/>

    <Terminal/>
    <Safari/>
    <Finder/>
    </main>
  ): (
    <BootLoader onComplete={() => setBooted(true)} />
  );
}

export default App
