<div style='text-align:center'>
    <img alt='Uprep Logo' src='public/assets/uprep-logo.svg'>
</div>

<h1 align='center'>
     U-Prep-Pathways-Platform
</h1>
<p align='center'>
    This repository holds NiJeL's work with the University Preparatory Academy in Detroit, MI on the U Prep Pathways Platform
</p>


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To clone and run this application, you'll need to have installed the following first:
* [Git](https://git-scm.com)
* [PostgreSQL](https://www.postgresql.org/download/) 
* [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) 
* Note: I'd also suggest having Gulp and Sequelize-CLI installed globally, i.e `npm i -g gulp sequelize-cli`

  
## Development Setup/Usage
* Clone the project from [here](https://github.com/NiJeLorg/U-Prep-Pathways-Platform.git)
* In the directory where you have cloned the project, run `npm install` to install all your independencies
* Inside the top-level config folder, create and add a `db.json` file, describing your different database environments
    ```
        {
            "development": {
                "username": "",
                "password": "",
                "database": "uprep",
                "host": "127.0.0.1",
                "port": "5432",
                "dialect": "postgres"
            },
            "test": {
                "username": "",
                "password": "",
                "database": "uprep-test",
                "host": "127.0.0.1",
                "port": "5432",
                "dialect": "postgres"
            }
        }
    ```
* Inside the top-level directory, create a `.env` describing your project environment variables
    ```
    NODE_ENV=
    PORT=
    BASE_URL=
    ```
* Build the project by running `npm run build`,
* Navigate to the address `http://localhost:3000` or `http://localhost:5000` for for browser-sync live reloading.

## Seeding data
To seed data to your local db:
    * Make sure you have the various/accompanied csv teachers files
    * Run the various commands on the terminal in the same sequential order.
        * `sequelize db:migrate`
        * `sequelize db:all`
        * `node uprep-data.js`
  

## Frontend Framework
- [Angular 1](https://angularjs.org/)

## Backend Framework
- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Sequelize](http://docs.sequelizejs.com/)

## Related
- [Postico](https://eggerapps.at/postico/) PostgreSQL Mac Client App

## Hosting
The hosted version of the application can be found [**here**](https://uprep-platform.herokuapp.com)



