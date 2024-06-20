# Node.js Project

This is a Node.js project structured according to best practices to maintain clean and modular code.

This project was created to understand how endpoints, authentication, and database operations work in a Node.js application. It includes functionality for user registration, login, and authentication, along with interaction with a database.


## Project Structure

The folder and file structure of the project is as follows:


### Folder and File Descriptions

- **src/**: Contains all the source code of the project.
  - **controllers/**: Here you will find the controllers that manage the business logic for the different routes.
  - **libs/**: Contains libraries and utilities that can be reused in different parts of the project.
  - **middlewares/**: Includes the middlewares that are used to process HTTP requests before they reach the controllers.
  - **models/**: Here the data models and schemas used by the application are defined.
  - **routes/**: Contains the route files that manage the different HTTP requests and assign them to the corresponding controllers.

- **.babelrc**: Configuration file for Babel, a JavaScript transpiler.
- **app.js**: Main entry point for the application where the server is configured and started.
- **config.js**: General configuration file for the application.
- **database.js**: File for database configuration and connection.
- **index.js**: Main file that starts the application.
- **.gitignore**: List of files and directories that Git should ignore.
- **package-lock.json**: File that locks the exact versions of the installed dependencies.
- **package.json**: Project configuration file that includes dependencies, scripts, and project metadata.


To install the necessary project dependencies, run the following command:

```bash
npm install
