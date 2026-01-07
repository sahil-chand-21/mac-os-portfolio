import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";

const useWindowStore= create(immer((set)=>({
    windows: WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX + 1,

    openWindow:(windowKey,data=null)=>set((state)=>{
        const win =state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = INITIAL_Z_INDEX;
        win.data= data ?? win.data;
        state.nextZIndex++;
    })

})));