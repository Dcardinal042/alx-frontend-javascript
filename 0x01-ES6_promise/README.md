Project Name: ES6 Promises
Overview
This project focuses on understanding and implementing ES6 Promises in JavaScript. The tasks cover various aspects of promises, error handling, and asynchronous programming.

Learning Objectives
By completing this project, you will be able to:

Explain the concept of Promises and their usage.
Use the then, resolve, and catch methods with Promises.
Employ the every method of the Promise object.
Utilize the throw/try mechanism.
Understand and use the await operator and async functions.
Requirements
NodeJS 12.11.x is required.
Use the provided setup script to install dependencies.
Code will be tested using Jest, and linted using ESLint.
Setup
Install NodeJS 12.11.x:

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify NodeJS and npm versions:

bash
Copy code
nodejs -v
npm -v
Install Jest, Babel, and ESLint in your project directory:

bash
Copy code
npm install
Project Structure
0-promise.js: Implementation of a simple Promise.
1-promise.js: Creating a Promise based on a boolean parameter.
2-then.js: Handling Promise resolution and rejection.
3-all.js: Handling multiple successful promises.
4-user-promise.js: Implementing a simple resolved Promise.
5-photo-reject.js: Implementing a Promise that rejects.
6-final-user.js: Handling multiple promises and returning an array of results.
7-load_balancer.js: Implementing a load balancer for promises.
8-try.js: Throwing errors and using try/catch.
9-try.js: Implementing a function to handle errors and successes with a queue.
100-await.js: Using async/await to call functions and return an object.
Testing
Run tests using Jest:

bash
Copy code
npm run test
Linting
Lint your code using ESLint:

bash
Copy code
npm run lint
Author
SAMUEL OKOH

Acknowledgments
This project is part of ALX Software Engineering Programme. 
