import   React          from  'react'
import   LaptopImage    from  '../../media/laptop-code-solid.svg'
import   JetImage       from  '../../media/fighter-jet-solid.svg'
import   HikingImage    from  '../../media/hiking-solid.svg'
import                        './desktop.css'

const DesktopNavBar = (props) => {
   return(
      <div id="navBar_bigDiv">
         <div className="navBar_blankDiv"/>
         <div
            className="navBar_Topics"
            onClick={ ()=>{props.handleTopicChange("Programming")} } >
            <img 
               src={LaptopImage} 
               alt="Laptop" 
               className="navBar_Topic_Images"/>
            Programming
         </div>
         <div
            className="navBar_Topics"
            onClick={ ()=>{props.handleTopicChange("Military")} } >
            <img 
               src={JetImage} 
               alt="Fighter Jet" 
               className="navBar_Topic_Images"/>
            Military
         </div>
         <div
            className="navBar_Topics"
            onClick={ ()=>{props.handleTopicChange("Life")} }>
            <img 
               src={HikingImage} 
               alt="Hiker"
               className="navBar_Topic_Images"/>
            Life
         </div>
         <div className="navBar_blankDiv"/>
      </div>
   )
}

export default DesktopNavBar