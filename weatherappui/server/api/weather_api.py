from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
from sql_commands import *
import json


class Weather(Resource):
    def get(self):
        cities = exec_get_all('Select * From Cities')
        return cities
    
    def post(self, city):
        sql = exec_commit('''exect_get INSERT INTO CITIES (CITY_NAME) VALUES (%s)''', (city,))
        return sql

    def delete(self, City_id):
        sql = exec_commit('''DELETE * FROM CITIES WHERE id=%s''', (City_id,))
        return sql
