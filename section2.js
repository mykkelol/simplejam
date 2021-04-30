/* 
--------------- What defines a JAMStack? --------------- 
- M: static markups; HTML, CSS, JS
- A: APIs
- J: JS
- the project must live in Git to be JAMStack, allowing it to be immutable and atomic deployment (atomicity means executed or not executed deployment; 
    i.e. it'd leave no trace of the working code on the server and your live website will only be updated if deployed)
*/

/* 
--------------- JAMStack Configuration --------------- 
You can choose any of the following Markup options:

- Static Site Generator - Hugo, Netlify, Jekyll, Gatsby, etc. (e.g. content sites that are easy to set-up & manage to allow us to easily post contents; think News)
- Headless CMS (Content Mangement System) - Netlify CMS, Strapi, etc. (e.g. user-roles that are fully-featured and wordProcess-like; think Enterprise Application that has roles -- you might consider pairing it with data hosting like GCP or AWS)
- JS Framework - Vue, React, Angular, etc.  (e.g. webApp with light content that are PWA)

- APIs - two group of APIs JAMStack will leverage; in-house API (given the monolith architecture has been refactored to pure API with no Markup rendering) and any Third-Party APIs 

Ultimately, JAMStack are static content delivered via CDN and automatically deployed via Git with server abstraction (i.e. removing like monolith architecture) with JS APIs
*/