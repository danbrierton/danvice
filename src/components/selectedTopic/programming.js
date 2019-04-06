import   React          from  'react'
import                        './desktop.css'

const ProgrammingTopic = () => {
   return(
      <div id="progTopic">
         <div class="progTopic_categories">
            Theory and Fundamentals
            <ul>
               <li>External Philosophy: <a target="_blank" href="https://agilemanifesto.org/">Agile Manifesto</a> and <a target="_blank" href="https://agilemanifesto.org/principles.html">Agile Principles</a> by Beck, Beedle, van Bennekum, Cockburn, Cunningham, Fowler, Grenning, Highsmith, Hunt, Jeffries, Kern, Marick, Martin, Mellor, Schwaber, Sutherland, Thomas</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            Online Schools and Courses
            <ul>
               <li>External Resource: <a target="_blank" href="https://www.codecademy.com/learn">Codecademy</a></li>
               <li>External Resource: <a target="_blank" href="https://www.w3schools.com/">W3Schools</a></li>
            </ul>
         </div>
         <div class="progTopic_categories">
            Terminal, Bash, and Unix
            <ul>
               <li>External Article: <a target="_blank" href="https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html">Bash Custom Prompt (PS1)</a> by Vivek Gite</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            Git and GitHub
            <ul>
               <li>External Article: <a target="_blank" href="https://help.github.com/en/articles/about-code-owners">About Code Owners</a> by GitHub</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            HTML
            <ul>
               <li>External Article: <a target="_blank" href="https://internetingishard.com/html-and-css/semantic-html/">Semantic HTML</a> by Interneting Is Hard</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            CSS
            <ul>
               <li>External Article: <a target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a> by CSS-Tricks </li>
               <li>External Article: <a target="_blank" href="https://css-tricks.com/snippets/css/complete-guide-grid/">A Complete Guide to Grid</a> by CSS-Tricks </li>
            </ul>
         </div>
         <div class="progTopic_categories">
            JavaScript
            <ul>
               <li>External Documentation: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">JavaScript Developer Documentation</a> by moz://a</li>
               <li>External Library: <a target="_blank" href="https://www.npmjs.com/">Node Package Manager</a> by npm</li>
               <li>External Library: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">Yarn Package Manager</a> by Yarn</li>
               <li>External Video: <a target="_blank" href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">What the heck is the event loop anyway?</a> by Philip Roberts</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            React
            <ul>
               <li>External Documentation: <a target="_blank" href="https://reactjs.org/docs/getting-started.html">React Developer Documentation</a> by Facebook</li>
               <li>External Documentation: <a target="_blank" href="https://reacttraining.com/react-router/web/guides/basic-components">React Router Documentation</a> by React Training</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            SQL
            <ul>
               <li>External Article: <a target="_blank" href="https://www.codecademy.com/articles/sql-commands">SQL Commands</a> by Codecademy</li>
            </ul>
         </div>
         <div class="progTopic_categories">
            Markdown
            <ul>
               <li>External Article: <a target="_blank" href="https://support.codebasehq.com/articles/tips-tricks/syntax-highlighting-in-markdown">Syntax Highlighting</a> by Codebase</li>
            </ul>
         </div>
      </div>
   )
}

export default ProgrammingTopic