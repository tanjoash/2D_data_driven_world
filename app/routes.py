from flask import render_template
from app import application

@application.route('/')
@application.route('/index')
def index():
    return render_template('index.html')

@application.route('/report')
def report():
    return render_template('report.html')

@application.route('/graph')
def graph():
    return render_template('graph.html')