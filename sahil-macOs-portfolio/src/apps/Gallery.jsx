import WindowControls from '#components/WindowControls'
import { gallery, photosLinks } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import React from 'react'

const Gallery = () => {

    const {id,icon,title} = photosLinks;
    const{image}=gallery;

  return (

      <div id="photos">
      <div id="window-header">
        <WindowControls target="Gallery"/>
        <h2>Gallery</h2>
      </div>
        <div className="sidebar">
            <ul>
               { photosLinks.map((alias)=>(
                <li key={alias.id}>
                    <img src={alias.icon} alt={alias.title} />
                    <p>{alias.title}</p>
                </li>
               ))}
            </ul>
        </div>
        <div className="gallery">
            <ul>
                {gallery.map((item)=>(
                    <li key={item.id}>
                        <img src={item.img} alt={item.id} />
                    </li>
                ))}
            </ul>
        </div>
        </div>

    )
}

const GalleryWindow = windowWrapper( Gallery, "Gallery")
export default GalleryWindow