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
