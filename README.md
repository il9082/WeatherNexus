Weather App
# About
This project was created to help me practice using APIs, making REST API calls, and work with ReactJS. The purpose of this application is to develop a minimalistic styled weather forecast application that allows the user to gather 5-days of forecast for a specific location. This project uses the user submitted name of a place in OpenWeathermap.org's current weather forecast, then parses the returned data for the latitute and longitude coordinates which is then resubmitted to OpenWeatherMap's five day forecast, which explicitly requiries the latitute and longitute. From all the data obtained from OpenWeatherApp, the ReactJS framework is used to display the information about the current weather, and the five days forecast using bootstrap. 


Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
`$ npm i react` - install ReactJS 
`$ npm i bootstrap` - install bootstrap
`$ npm i reactstrap - react react-dom` install reactstrap
`$ pip install -U flask-cors` - install CORS
`$ pip install -U Flask` - install Flask
`$ pip install psycopg2` - install psycopg2


Starting the Project
`cd .\WeatherApp\` - Change directory into the proper folder.
`npm init` - type in terminal to initialize the npm package
`python .\server\server.py` - instantiate the backend 
`npm start` to instantiate the project


Built With
ReactJS- The web framework used
PostgreSQL - Data Management
Psycopg2 - PostgreSQL adapter for Python
Flask - Web framework for Python


Acknowledgments
SQL_commands.py code was inserted from a previous project

Inspiration
I made this project because I thought it would allow me to gain more experience with full stack and utilizing other APIs. I also had nothing to this winter break so I thought this would help keep my knowledge of react, sql, etc from not rotting.
