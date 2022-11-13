from flask import render_template
from app import application

@application.route('/')
def base():
    return render_template('base.html', title='2D Project')

