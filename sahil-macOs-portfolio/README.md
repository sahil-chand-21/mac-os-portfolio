# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


why done this to implement loader on app logo click in navbar
## main.jsx    
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

  const reboot = () => {
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
    </main>
  ): (
    <BootLoader onComplete={() => setBooted(true)} />
  );
}

export default App


 ## navbar.jsx
import { navIcons, navlinks } from "#constants"
import useWindowStore from "#store/window";

const Navbar = ({ onReboot }) => {
  const {openWindow}=useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" onClick={onReboot} />
        <p className="font-bold">Sahil-portfolio</p>
        <ul>
          {/* {[
            {id:1,name:"portfolio"},
            {id:2,name:"Contact"},
            {id:3,name:"Projects"},  /*  shifting this date into the constants to clean code

          ]*/

           the floder are implemented just change it with your project 