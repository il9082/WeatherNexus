from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from api.weather_api import *

app = Flask(__name__) #create Flask instance
CORS(app) # Enable CORS for Node client
api = Api(app) #api router

api.add_resource(Weather,'/weather')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('clubs.sql');
    print("Starting flask");
    app.run(debug=True, port = 4999),
