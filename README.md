# Eze Phones API

## Description
Eze Phones API for iPhones Buying and Selling

## Table of Content

- [Documentation](#documentation)
- [System Setup](#system-setup)
- [Installation](#installation)
- [Testing](#testing)
- [Principles used in my Design](#principles-used-in-my-design)

## Documentation
The API documentation is available [here](https://eze-phones.herokuapp.com/api/docs/).

### System Setup
Your system will need to have the following software installed:

  * [Node](https://nodejs.org/en/download/)
  * [MongoDB](https://www.mongodb.com/)

## Installation
#### Step 1: Clone the repository

```bash
git clone https://github.com/ogbon/eze-phones
cd eze-phone
```

#### Step 2: Setup database
Create a new MongoDB database

#### Step 3: Setup environment variables
Copy `.env.sample` to `.env` i.e `cp .env.sample .env`
Update MONGODB_URI with url of database created in Step 2
Update other variables if needed

#### Step 4: Install NPM packages
```bash
npm i
```
#### Step 5: Start in development mode
```bash
npm run dev
```

## Testing
```bash
npm run test
```

## Principles used in my Design
#### Asynchronousity
There are some code or function calls that don't execute immediately they take
longer time to execute than synchronous codes. So I used promise or async await
to handle such codes. Promise, async await or even callback functions makes it
possible to return the result of the asynchronous code after the execution time has finished.

#### Destructuring
Makes it possible to take out elements in an object or array, I also use it when I import exported local
modules or even third party modules by destructuring variables,functions from the imported module.

#### Preventing Mutation
I use spread operator to prevent reference type variables from experiencing
mutation so with the spread operator the values are copied so that a change in one
place will not affect the variable. I also used the array map function to aid the
copied version of array to also prevent mutation.

#### Coersion
With coersion we can make a particular type to be forced into another
type.I used Coersion often in conditional statements and the values are coersed
into boolean value, but I used it for other statements where values are forced
to other types

#### Functional programming
Has to do with higher order functions, it is a function that contains another function.I used it because
it aids abstraction the inner function hides the inner working of the codeand makes the code cleaner.

#### Pattern Checking
I used regular expression to check for patterns in a string and if there is
a match I make decision with it.
