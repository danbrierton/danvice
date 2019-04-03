import React from 'react'
import './desktop.css'

const DesktopHeader = () => {
   return(
      <div id="header_bigDiv">

         <h1 
            id="header_name"
            className="header_text flexRight flexBottom">
            danvice
         </h1>

         <h3 
            id="header_phrase"
            className="header_text flexLeft flexBottom italic notBold">
            The blind leading the blind.
         </h3>

      </div>
   )
}

export default DesktopHeader