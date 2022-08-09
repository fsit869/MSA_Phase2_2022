# MSA_Phase2_2022
My project for MSA 2022 Phase 2. Contains Frontend and Backend project. 

<h1> Frontend </h1>
A front end application connected to a external RESTAPI "https://returnyoutubedislike.com/"
Fetches and displays the youtube video alongside likes and dislikes. 

Requirements
1) Create a new typescript and react web app
2) Connect this application to a different 3rd party RESTful Web API
3) Allow users to input information that will be utilized by the API
4) Make use of a UI library like Material-UI.
5) Utilize source control through GitHub.


<h1> Backend </h1>

- Create at least one controller that implements CRUD operations for a resource (Create, Read, Update, Delete).
        - Created a student table using inmemory DB, supports CRUD operations
- Call at least one other API.
        - Calls YoutubeDislike API. external RESTAPI "https://returnyoutubedislike.com/"
- Create at least two configuration files, and demonstrate the differences between starting the project with one file over another.
        - Contains two config files. Each config file has a different "key" and "region"
        - When program starts it prints the corresponding config files key and region to demonstrate different config files        
- Demonstrate an understanding of how these middleware via DI (dependency injection) simplifies your code.
        - Explained in pdf
- Demonstrate the use of NUnit to unit test your code.
        - Testing implemented
- Use at least one substitute to test your code.
        - Implemented multiple test files
- Demonstrate an understanding of why the middleware libraries made your code easier to test.
        - Explained in PDF
        
<h2> Backend explainations </h2>
<p>They are listed in BackendDemos.pdf, but for clarity it will be written here as well </p>

<h3>Demonstrate an understanding how middleware via DI simplifies your code:</h3>
<p>
Demonstrate an understanding how middleware via DI simplifies your code:
To understand how middleware via DI simplifies your code, first we must understand what is DI.
DI is a design pattern, which is used by many middleware libraries such as Java spring or C# .net. It 
allows for loosely coupled programs, allowing for clear modular code. 
</br>
When a class requires a dependency, the middleware “injects” the dependency for you. There is no 
need to initiate a new object. It will be pushed in by the middleware. So for example for our 
backend, the model layer has a dependency on the inbuilt memory database. Rather than initiating
the dependency, we simply ask the middleware, hey I need this dependency. The middleware will 
look for it and give it to you, should it exist. 
</br>
How does this simplify code? When the code gets larger, there would be more dependencies on 
each other. Dependency hell occurs, where everything is very tightly coupled and prone to breaking
and bugs. Dependency injection reduces all the dependencies on each other, by allowing it to be 
modular. Breaking the code into pieces, makes it easier to manage and thus simplifies the code. 
</br>
</p>


<h3>Demonstrate an understanding of why middleware libraries made your code easier to test:</h3>

<p>
Middleware libraries make your code easier to test, by breaking functionalities into separate
libraries/layers that are independent from one another. This means each library is independent, has 
one purpose and that one purpose can be easily tested. There is a common principle called the 
single responsibility principle. This is an example of it. 
</br>
For example, lets look at the Spring Java framework. https://spring.io/projects
There are many libraries, each with its own purpose. EG Spring Oauth, Spring Data, Spring 
GraphQL…etc. Notice that each library has one purpose. Middleware library’s make your code easy 
to test because it splits off a complex system into subsystems. 
</br>
In addition, middleware libraries reduce the boilerplate code needed to get the functionality 
working. This makes it easier to test, as many of the hard work is done for you by the middleware 
library and is well tested. This means you can focus only on your code and implementation, reducing 
the amount of code you need to test. 
</p>
