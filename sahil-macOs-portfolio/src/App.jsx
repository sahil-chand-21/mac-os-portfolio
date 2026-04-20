import React from 'react'
import  { useState } from 'react'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { gsap, Draggable } from "gsap/all";
import  Terminal from './apps/Terminal';
import Safari from "./apps/Safari";
import Resume from "./apps/Resume";
import  Finder  from './apps/Finder';
import Textview from './apps/Textview'
import Imageview from './apps/Imageview'
 import Folder from '#components/Folder'
import BootLoader from "#components/BootLoader";
gsap.registerPlugin(Draggable);
const App = () => {

  const [booted, setBooted] = useState(false); 
  const reboot=()=>{
    setBooted(false);
  };
  return booted ?  (
    <main>
    <Navbar onReboot={reboot}/>
    <Resume/>
    <Welcome/>
    <Dock/>

    <Terminal/>
    <Safari/>
    <Finder/>
    <Textview/>
    <Imageview />
    <Folder/>
    </main>
  ): (
    <BootLoader onComplete={() => setBooted(true)} />
  );
}

export default App
