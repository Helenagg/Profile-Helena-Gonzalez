"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Family
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():
    data = request.data
    data = json.loads(data)
    user = User(email = data['email'], password = data['password'], is_active = True)
    db.session.add(user)
    db.session.commit()

    response_body = {
        "message": "Created user",
        "User": user.serialize(),
        "ok": True
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login ():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = email, password = password).first()

    if user == None:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.email)
    response_body = {
         "message": "Token created",
        "token": access_token
    }

    return jsonify(response_body), 200

@api.route('/family', methods=['GET'])
def handle_family():
    family = Family.query.all()
    result = []
    for person in family:
        result.append(person.serialize())

    response_body = {
        "message": "All Ok",
        "Family": result
    }

    return jsonify(response_body), 200

@api.route('/family/<int:id>', methods=['GET'])
def handle_person(id):
    person = Family.query.filter_by(id = id).one()
    result = person.serialize()

    response_body = {
        "Person": result
    }

    return jsonify(response_body), 200

@api.route('/family', methods=['POST'])
def create_person():
    data = request.data
    data = json.loads(data)
    person = Family(first_name = data['first_name'], last_name = 'Jackson', age = data['age'], lucky_numbers = data['lucky_numbers'])
    db.session.add(person)
    db.session.commit()

    response_body = {
        "message": "Created person",
        "Person": person.serialize(),
        "ok": True
    }

    return jsonify(response_body), 200

@api.route('/family/<int:id>', methods=['DELETE'])
def delete_person(id):
    person = Family.query.get(id)
    db.session.delete(person)
    db.session.commit()

    response_body = {
        "message": "Delete Person",
    }

    return jsonify(response_body), 200