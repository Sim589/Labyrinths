import os

from flask import Flask


def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)


    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'
    
    @app.route('/')
    def root_page():
        return 'Api root page'

    return app