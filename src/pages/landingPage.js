import   React             from  'react'
import   MediaQuery        from  'react-responsive';
import   DesktopHeader     from  '../components/header/desktop'
import   DesktopNavBar     from  '../components/navBar/desktop'
import   DesktopFooter     from  '../components/footer/desktop'
import   ProgrammingTopic  from  '../components/selectedTopic/programming'
import   MilitaryTopic     from  '../components/selectedTopic/military'
import   LifeTopic         from  '../components/selectedTopic/life'
import                           './global.css'

class LandingPage extends React.Component{
   state = {
      currentTopic: <ProgrammingTopic/>
   }

   handleTopicChange = (topic) => {
      if       (topic==="Programming") { 
         this.setState( { currentTopic: <ProgrammingTopic/> }  ) 
      }
      else if  (topic==="Military") { 
         this.setState( { currentTopic: <MilitaryTopic/> }     ) 
      }
      else if  (topic==="Life") { 
         this.setState( { currentTopic: <LifeTopic/> }         ) 
      }
   }
   
   render(){
      return(
         <div>
            <MediaQuery    query="(min-device-width: 1224px)">
               <DesktopHeader/>
               <DesktopNavBar
                  handleTopicChange = {this.handleTopicChange}/>
               {
                  this.state.currentTopic
               }
               <DesktopFooter/>
            </MediaQuery>

            <MediaQuery    query="(max-device-width: 1224px)">
               <div> 
                  Sorry, this page is not mobile friendly yet. Please try again later! 
               </div>
            </MediaQuery>
         </div>
      )
   }
}

export default LandingPage

