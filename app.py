#!/usr/local/bin/python3
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')


@app.route('/l')
def l():
    return render_template('l.html')


@app.route('/xfk')
def xfk():
    return render_template('xfk.html')


@app.route('/goal')
def goal():
    return render_template('goal.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='8000')
