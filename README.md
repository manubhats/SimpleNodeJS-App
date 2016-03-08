# CSE 5335 PROJECT 1

A simple Web application to show Client-Server communication using Node.js, ExpressJS and AngularJS.

### a. What server framework did you choose and why?
Node.js is the server framework used in this project. The following reasons helped me choose Node.js over Rails.
- JavaScripts rising popularity and a number of new javascript frameworks are coming up every few months. Learning Node.js would be a good start at becoming a web developer.
- The learning curve is not steep compared to Ruby on Rails because I'm already familiar with JavaScript. Ruby is completely new to me.
- Node.js runs on the Google’s V8 JavaScript engine which is known to be very fast.V8 compiles and executes JavaScript at lightning speeds mainly due to the fact that V8 compiles JavaScript into native machine code.
- The main advantage Node.js is the way it handles event loop.The event loop is a single thread that performs all I/O operations asynchronously(Non-blocking) whereas traditional web frameworks support synchronous(blocking) I/O operations.

### b. What client framework did you choose and why?
AngularJS is the client framework used in this project. Being a big fan of google and its products I always wanted to learn Angular given the hype around the web community. This was a great opportunity to learn and use Angular on a project.
- AngularJS and Node.js together are perfect for developing and managing single page applications. 
- Angular.js supports two way data binding which increases testability of applications.
- AngularJS is a JS framework which implements Model/View/Controller(MVC) concept in the UI and separates the UI data and the UI representation of data.
- The code written in Angular is more clean, maintainable, scalable, testable , understandable.

### c. What aspect of the implementation did you find easy, if any, and why?
Writing and running a server using Node.js was easy because there were lots of good resources available online to study and learn Node.js.  
### d. What aspect of the implementation did you find hard, if any, and why?
The hardest part of the implementation was using the response object from Node.js in the AngularJS controller to display on the web page.

### e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your solution?
The following components were used in addition to Node.js and AngularJS.
- ExpressJS: It was a cross-platform Node.js web application server framework which runs on top of Node.js and written in JavaScript. It is the standard web framework for Node.js. Express is used for its efficiency in routing and for the availablity of plenty of supporting middlewares.
- body-parser: It is the Node.js body parsing middleware. It is used to parse JSON object. i.e it extracts form data out of request headers. 

### f. What Ubuntu commands are required to deploy and run your server? 
Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:manubhats/cse5335-project-1.git # or clone your own fork
$ cd cse5335-project-1
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
   [//]:#References
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Heroku getting Started]: <https://github.com/heroku/node-js-getting-started>
