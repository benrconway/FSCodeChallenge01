# Code Challenge

This is my fulfillment of the full stack code challenge.

Create a Progressive Web App(PWA) about delicious cakes and allow a user to add their own cakes to the list.
Being a full stack challenge, it also required the creation of a simple REST API to serve information to the PWA.

In the documentation below I have the following sections:

[Expected Functionality, what I was given to build.](#Expected-functionality)

[Progression of production, bullet points on how I went about the project](#Progression-of-production)

[Known problems and next steps, known bugs and next things to tackle and make this project better](#Known-problems-and-next-steps)

[Lessons learnt during completion, main points of new learning that occurred during the creation of this project](#Lessons-learnt-during-completion)

[How to run, the commands used to run the project](#How-to-run)

## Expected functionality

An API that has REST standard CRUD functionality in the form of GET, POST, PUT and DELETE requests.

A frontend that fulfills the following functionality:

1. As a user I can see a simple list of cakes
2. As a user I can see more details of a given cake
3. As a user I can post in a new cake for the list and see it in the list of cakes as stated in point 1

## Progression of production

- [x] Understanding product definition
- [x] Defining goals and workflow
- [x] Setup Backend project (Express Server)
- [x] Setup Frontend project (React app)
- [x] Add router for '/cakes' endpoint
- [x] Manual test of functionality server functionality using Postman
- [x] Create basic page structure
- [x] Introduce Routing with react-router-dom package
- [x] Connect frontend to backend
- [x] Display returned cake list information
- [x] Display singular cake information
- [x] Add form within a modal for creating a new cake
- [x] Manually test that all functionality now exists
- [x] Failure of previous point led to adding cloud based MongoDB persistence layer
- [x] Retest of functionality
- [x] Test of functionality on Mobile (currently failed and being looked into, see **Know problems** below)

## Known problems and next steps

- CORS request doesn't succeed when using my phone to access local build on laptop. (Firefox and Chrome)
- Expand on current unit tests to give more complete coverage
- Change from Async/Await to Promises in the frontend
- Test for and fix any Accessibility issues
- Complicate the error handling (potentially include a 3rd party reporting solution like Sentry.io)
- Add end-to-end testing solution (ie Cypress)
- Add proper model and validation for cakes in the API
- Add more styling to make a more normal responsive web app experience
- More deeply research PWAs to understand how to more fully use this current technology
- Complicate the cake model to include specific user creation
- Internationalise it
- Add sign-up capability and limit cake creation to logged in users
- Add Update and Delete functionality
- Add the possibility of comments (and maybe additional 'Yum Factors') from users
- Possibly add some sort of store functionality (like Redux, or a React Hook)

## Lessons learnt during completion

1. I learnt during the writing of this application, what exactly a PWA is. I had previously written responsive web applications, however this appears to take it another step
2. How to setup the basic connection to the MongoDB cloud service. I have previously used MongoDB, however connecting to the cloud service as opposed to a local version was an interesting aside, quite similar, but with an equal volume of odd gotchas
3. That CORS is an interesting challenge in itself. One that I wonder if I would avoid more of the gotchas by deploying the application live rather than keeping in a local version

## How to Run

### First time running this

Requirements:

1. Node
2. An open internet connection
3. A .env file in your backend directory that has values of DB_NAME, DB_USERNAME, DB_PASSWORD, DB_ADDRESS and DB_COLLECTION.

At the root directory is a file called `setup_and_start.sh`, simply run this with the command `sh setup_and_start.sh`.
If by some happenstance you have a problem, try running `chmod +x setup_and_start.sh` and repeating the previous command.
If it succeeds, this will install all dependencies and then run the application locally.
If it doesn't work, check the terminal output and get in contact with the address below.

### Every time after

At the root directory you can simply use `npm start`.

If you have any questions, comments, bugs, recommendations, please address them to *benrconway84@gmail.com*
