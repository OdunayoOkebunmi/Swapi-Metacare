# Swapi-Metacare
> Create a small set of rest API endpoints using NodeJS that can be used for listing
the names of Star Wars movies along with their opening crawls and comment
counts, adding and listing anonymous comments for a movie, and getting the
character list for a movie.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Server side hosted on Heroku
https://metacare-swapi.herokuapp.com/

## API Documentation
https://documenter.getpostman.com/view/10230743/UVXokZJ8

## Table of Content
 * [Getting Started](#getting-started)

* [Tools/Stacks](#tools)
 
 * [Setting up](#setting-up)

 * [Linting Style](#linting-style)
 
 * [Features](#features)
 
 
 * [Author](#author)


## Getting Started

### Tools
1. Node js
2. Express
4. MongoDB
5. Docker
6. Postman


### Setting up
1. Clone this repository into your local machine:
```
e.g git clone https://github.com/OdunayoOkebunmi/Swapi-Metacare/
```
2. cd into the folder
```
e.g cd Swapi-Metacare
```

3. Create `.env` file and fill out the required information 
```
e.g cp .env.example .env
```
4. Install dependencies

```
e.g npm install
```
5. Start the application by running the server script.

```
e.g npm run server
```

6. Install postman to test all endpoints on port 8080.

7. Run `docker-compose up`

### Linting Style
* ESLint with Airbnb style guide. 

## Features

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>GET</td> <td>/</td>  <td>Base url</td></tr>

<tr><td>GET</td> <td>/api/v1/movies</td>  <td>Get all movies</td></tr>

<tr><td>GET</td> <td>/api/v1/characters?sortParam=<value></td>  <td>Sort characters by gender(name)(height)</td></tr>

<tr><td>GET</td> <td>/api/v1/characters?gender=<value></td>  <td>Filter characters by gender(male)(female)</td></tr>

<tr><td>POST</td> <td>api/v1/comments/:id</td>  <td>Create a comment for a movie</td></tr>
<tr><td>GET</td> <td>/api/v1/comments</td>  <td>Get all comments</td></tr>
<tr><td>GET</td> <td>/api/v1/comments/:id</td>  <td>Get one comment</td></tr>
</table>

## Author
*  [Odunayo Olajumoke Okebunmi](https://twitter.com/OdunayoO_)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
