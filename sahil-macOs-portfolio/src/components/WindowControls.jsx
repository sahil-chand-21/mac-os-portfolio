import useWindowStore from "#store/window";


const WindowControls = ({target}) => {

    const {closeWindow}=useWindowStore();
  return (
    <div id="window-controls">
        <div className="close" onClick={()=> closeWindow(target)}></div>
             <div className="minimize"></div> {/* need to add this functionality by self */}
            <div className="maximize"></div>
        
    </div>
  )
}

export default WindowControls;