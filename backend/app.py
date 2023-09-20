from flask import Flask, jsonify, render_template, request
import pickle
import numpy as np
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
import datetime
import os

# model = pickle.load(open('model.pkl', 'rb'))
model2 = pickle.load(open('reg_model.pkl', 'rb'))
app = Flask(__name__)


os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
order_queue=[]
app = Flask(__name__)
#user_pass = [{'user':'2CCN5','pass':'baba$123'}, {'user':'2BBS10','pass':'Pravin@123'}, {'user':'2CCS07541','pass':'Mukund@123'}, {'user':'2CCN10873', 'pass':'santosh@1982'}]
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///session.db'
app.config['SQLALCHEMY_BINDS'] = {
    'users': 'sqlite:///users.db', 'reports': 'sqlite:///reports.db'}
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SESSION_TYPE'] = 'sqlalchemy'
app.config[
    'SECRET_KEY'] = 'akjndkjsckhshdvdc l sjekjbfi3qt4o858y903u094-u50328924tgs hv3rn49845845987070'
app.config['PERMANENT_SESSION_LIFETIME'] = datetime.timedelta(hours=8)
app.jinja_env.add_extension('jinja2.ext.do')
db = SQLAlchemy(app)
db.app = app

app.config['SESSION_SQLALCHEMY'] = db
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
sess = Session(app)


class user(db.Model):
    __bind_key__ = 'users'
    email = db.Column(db.String(100), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    passwd = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100))
    age= db.Column(db.Float)
    gender = db.Column(db.Boolean)



# class report(db.Model):
#     __bind_key__ = 'reports'
#     email = db.Column(db.String(100), primary_key=False)
#     timestamp = db.Column(db.DateTime, nullable=False)



@app.route('/')
def home():
    return render_template('index.html')



@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email=data['email']
    passwd=data['passwd']
    try:
        if user.query.get(email).passwd==passwd:
            return jsonify({'success':True})
    except:
        return jsonify({'success':False})
    return  jsonify({'success':False})



@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        email=data['email']
        passwd=data['passwd']
        name=data['name']
        state=data['state']
        age=data['age']
        gender=data['gender']
        new_user = user(email=email, passwd=passwd, name=name, state=state, age=age, gender=gender)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'success':True})
    except:
        return jsonify({'success':False})




@app.route('/mental', methods=['GET', 'POST'])
def mental_predict():
    if request.method == 'POST':
        mental_report = request.form.get('mental_report')
        print(mental_report)
        my_string = mental_report
        mental_list = [int(val) if val != '' else 0 for val in my_string.split(",")]

        # Reshape the input data to be two-dimensional
        mental_array = np.array(mental_list).reshape(1, -1)
        print(mental_array)
        mental_prediction = model2.predict(mental_array)
        print(mental_prediction)
        mental_prediction = np.round(mental_prediction)
        print(mental_prediction)
    return jsonify({'mental_report': mental_prediction.tolist()})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
