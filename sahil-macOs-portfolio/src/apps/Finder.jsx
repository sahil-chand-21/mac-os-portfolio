import WindowControls from '#components/WindowControls'
import { locations } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import { Search } from 'lucide-react'
import React from 'react'
import clsx from 'clsx';
import useLocation from '#store/location'

const Finder = () => {

    const {setActiveLocation, resetLocation,activeLocation }=useLocation();

    const openItem = (item) => {};

    const MenuOptions=(options)=>
        options.map((item)=>(
         
            <li
             key={item.id}
            onClick={()=>setActiveLocation(item)}
            className={clsx(item.id===activeLocation.id ?"active":"not-active",)}
            >
                {/* here we use clsx to give two classname and we did so that if we click on the menu it should have the active blue color and oncllick */}

                <img src={item.icon} alt={item.name} className='w-4' />
                <p className='text-sm font-medium truncate'>{item.name}</p>
            </li>
        ))




    // this is see will be on return part and above is logic
  return (
    <>
    <div id='window-header'>
        <WindowControls target='finder'/>
        <Search className='icon' />
    </div>

    <div className='bg-white flex h-full '>
    <div className='sidebar'>
        <div>
            <h3>Favorites</h3>
            <ul>{MenuOptions(Object.values(locations))}</ul>
        </div>
        <div>
            <h3>Work</h3>
            <ul>
                {MenuOptions(locations.work.children)}
            </ul>
        </div>
    </div>
        <ul className='content'>
            {activeLocation?.children.map((item)=>(
            <li key={item.id}
             className={item.position}
              onClick={()=>openItem(item)}>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
            </li>
            ))}
        </ul>
    </div>
        </>
  )
}

const FinderWindow=windowWrapper(Finder,'finder');

export default FinderWindow;