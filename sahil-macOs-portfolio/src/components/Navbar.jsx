import dayjs from "dayjs";


import { navIcons, navlinks } from "#constants"
import useWindowStore from "#store/window";

const Navbar = () => {
  const {openWindow}=useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Sahil-portfolio</p>
        <ul>
          {/* {[
            {id:1,name:"portfolio"},
            {id:2,name:"Contact"},
            {id:3,name:"Projects"},  /*  shifting this date into the constants to clean code

          ]*/
         navlinks.map(({id, name,type})=>{ 
            return <li key={id} onClick={()=> openWindow(type)}>
              <p>{name}</p>
            </li> 
          })}
        </ul>{/* we are doing this to make the list which store certain items*/}
        </div>

        <div>
          <ul>
            {navIcons.map(({id,img})=>{
              return <li key={id}>
                <img src={img} alt={`${id}`} className="icon-hover" />
              </li>
            })}
          </ul>
          <time> {dayjs().format('ddd MMM D h:mm A')}</time>  {/*this is to show current day and time*/ }
        </div>
    </nav>

  )
}

export default Navbar