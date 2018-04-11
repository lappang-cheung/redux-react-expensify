# Redux-React-Expensify
An expense application created using the following:
* NodeJs, ReactJS, Redux, Heroku, Firebase, 0Auth, Sass, BEM, JEST

## Table of Contents
- [Application Run Through](#application-run-through)
- [Application Design and Thought](#application-design-and-thought)
- [Installation & Run on Client and Server](#installation-on-client-and-server)
- [Demo Application](#demo-application)

## Application Run Through

This application allowed users to create expenses and this would be authoized using 0Auth using their gmail accounts. Each expense is link to that specific individual user and would be stored in the backend using the Firebase database. These calls would used the API keys and firebase node packages in order to connect both client and server side.

Credit - Andrew Mead - Instructor 

## Application Design and Thought

To really learn a redux and react was to create an application which can store data of the user provided. As an expense app, this allow a real world application where users can input real data and able be fetch back from the client-server side. Using {connect} from redux allowed the dispatches and stores to correctly push/get the data correctly. As well as using 0Auth to create the uid to create an user object to have their expenses stored correctly and only display the correct expenses only valid to them

## Demo Application

To view the demo please visit: https://expensifyreactredux.herokuapp.com.