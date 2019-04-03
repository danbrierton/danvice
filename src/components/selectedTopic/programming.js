import   React          from  'react'
// import                        './desktop.css'

const ProgrammingTopic = () => {
   return(
      <div id="progTopic">
         <div class="progTopic_categories">
            Theory and Fundamentals
            <ul>
               <li>Resource: <a href="https://agilemanifesto.org/">Agile Manifesto</a> by Beck, Beedle, van Bennekum, Cockburn, Cunningham, Fowler, Grenning, Highsmith, Hunt, Jeffries, Kern, Marick, Martin, Mellor, Schwaber, Sutherland, Thomas</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            Online Schools and Courses
            <ul>
               <li>Resource: <a href="https://www.codecademy.com/learn">Codecademy</a></li>
            </ul>
            <ul>
               <li>Resource: <a href="https://www.w3schools.com/">W3Schools</a></li>
            </ul>
         </div>
         <div class="progTopic_categories">
            HTML
            <ul>
               <li>Resource: <a href="https://internetingishard.com/html-and-css/semantic-html/">Semantic HTML</a> by Interneting Is Hard</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            CSS
            <ul>
               <li>Resource: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a> by CSS-Tricks </li>
               <li>Resource: <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">A Complete Guide to Grid</a> by CSS-Tricks </li>
            </ul>
         </div>
         <div class="progTopic_categories">
            JavaScript
            <ul>
               <li>Resource: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">JavaScript Developer Documentation</a> by moz://a</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            React
            <ul>
               <li>Resource: <a href="https://reactjs.org/docs/getting-started.html">React Developer Documentation</a> by Facebook</li>
            </ul>
         </div>
      </div>
   )
}

export default ProgrammingTopic