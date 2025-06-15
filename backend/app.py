import traceback
from flask import Flask, jsonify, render_template, request, make_response, session
import pickle
import numpy as np
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
import datetime
import os
from flask_cors import CORS, cross_origin
import json

# model = pickle.load(open('model.pkl', 'rb'))
model2 = pickle.load(open('reg_model.pkl', 'rb'))
app = Flask(__name__)
#cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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
    jan = db.Column(db.String(100))
    feb = db.Column(db.String(100))
    mar = db.Column(db.String(100))
    apr = db.Column(db.String(100))
    may = db.Column(db.String(100))
    jun = db.Column(db.String(100))
    jul = db.Column(db.String(100))
    aug = db.Column(db.String(100))
    sep = db.Column(db.String(100))
    oct = db.Column(db.String(100))
    nov = db.Column(db.String(100))
    dec = db.Column(db.String(100))



# class report(db.Model):
#     __bind_key__ = 'reports'
#     email = db.Column(db.String(100), primary_key=False)
#     timestamp = db.Column(db.DateTime, nullable=False)

with app.app_context():
    db.create_all()

#@cross_origin()
@app.route('/')
def home():
    return render_template('index.html')


#@cross_origin()
@app.route('/login', methods=['POST'])
def login():
    try:     
        data = request.form
        print(data)
        email=data['email']
        passwd=data['passwd']
        # print(user.query.get(email),type(user.query.get(email)))
        db = user.query.all()
        for i in db:
            if i.email==email and i.passwd==passwd:
                session['email'] = email
                # print('session',session)
                res = make_response(jsonify({'success':True}))
                res.headers['Access-Control-Allow-Origin']= '*'
                return res
    except Exception as e:
        print(e)
        #return jsonify({'success':e})
        res = make_response(jsonify({'success':e}))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
    #return jsonify({'success':False})
    res= make_response(jsonify({'success':False}))
    res.headers['Access-Control-Allow-Origin'] ='*'
    return res


#@cross_origin()
@app.route('/register', methods=['POST'])
def register():
    try:
        #data = request.get_json()
        #print("json",data)
        print("form",request.form)
        data = request.form
        email=data['email']
        passwd=data['passwd']
        name=data['name']
        state=data['state']
        age=data['age']
        gender=data['gender']
        if gender.upper()=="MALE":
            gender=True
        else:
            gender=False
        blank=str([50]*11)
        new_user = user(email=email, passwd=passwd, name=name, state=state, age=age, gender=gender, jan=blank, feb=blank, mar=blank, apr=blank, may=blank, jun=blank, jul=blank, aug=blank, sep=blank, oct=blank, nov=blank, dec=blank)
        db.session.add(new_user)
        db.session.commit()
        res = make_response(jsonify({'success':True}))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify({'success':True})
    except Exception as e:
        res = make_response(jsonify({'success':False}))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify({'success':e})



@app.route('/profile', methods=['POST'])
def profile():
    try:
        data = request.form
        email=data['email']
        obj = user.query.get(email)
        ret={
            'success':True,
            'email':obj.email,
            'name':obj.name,
            'state':obj.state,
            'age':obj.age,
            'gender':  'male' if obj.gender==1 else 'female',
            'reports':[obj.jan, obj.feb, obj.mar, obj.apr, obj.may, obj.jun, obj.jul, obj.aug, obj.sep, obj.oct, obj.nov, obj.dec]
        }
        res = make_response(jsonify(ret))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify(ret)
    except Exception as e:
        return jsonify({'success':e})
    return  jsonify({'success':False})




@app.route('/getstat', methods=['POST'])
def allstates():
    try:
        data = request.form
        state=data['state']
        gender=int(data['gender'])
        if gender==2:
            gender=[True,False]
        elif gender==1:
            gender=[True]
        else:
            gender=[False]
        count=0
        start_age=int(data['start_age'])
        end_age=int(data['end_age'])
        db = user.query.all()
        retarr=[[0]*11]*12
        for i in db:
            if (i.state==state or state=='all') and i.gender in gender and (end_age==-1 or (i.age<=end_age and i.age>=start_age)):
                count+=1
        
                report=json.loads(i.jan)
                for i in range(11):
                    retarr[0][i]+=report[i]

                report=json.loads(i.feb)
                for i in range(11):
                    retarr[1][i]+=report[i]
                
                report=json.loads(i.mar)
                for i in range(11):
                    retarr[2][i]+=report[i]

                report=json.loads(i.apr)
                for i in range(11):
                    retarr[3][i]+=report[i]

                report=json.loads(i.may)
                for i in range(11):
                    retarr[4][i]+=report[i]

                report=json.loads(i.jun)
                for i in range(11):
                    retarr[5][i]+=report[i]

                report=json.loads(i.jul)
                for i in range(11):
                    retarr[6][i]+=report[i]

                report=json.loads(i.aug)
                for i in range(11):
                    retarr[7][i]+=report[i]

                report=json.loads(i.sep)
                for i in range(11):
                    retarr[8][i]+=report[i]

                report=json.loads(i.oct)
                for i in range(11):
                    retarr[9][i]+=report[i]

                report=json.loads(i.nov)
                for i in range(11):
                    retarr[10][i]+=report[i]

                report=json.loads(i.dec)
                for i in range(11):
                    retarr[11][i]+=report[i]
        
        for i in range(12):
            for i in range(11):
                retarr[i]/=count
        ret={
            'success':True,
            'reports':retarr
        }
        res = make_response(jsonify(ret))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify(ret)
    except Exception as e:
        return jsonify({'success':e})
    return  jsonify({'success':False})




@app.route('/profile/edit', methods=['POST'])
def profileedit():
    try:
        data = request.form
        email=data['email']
        name=data['name']
        state=data['state']
        age=data['age']
        gender=data['gender']
        obj = user.query.get(email)
        obj.name=name
        obj.state=state
        obj.age=age
        obj.gender=gender
        ret={
            'success':True
        }
        res = make_response(jsonify(ret))
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify(ret)
    except:
        res = make_response({'success':False})
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res
        return jsonify({'success':False})
    return  jsonify({'success':False})




#@cross_origin()
@app.route('/mental', methods=['POST'])
def mental_predict():
    try:
        print('hi')
        mental_report = request.form.get('mental_report')
        print(mental_report)
        # print('email',session)
        my_string = mental_report
        mental_list = [int(val) if val != '' else 0 for val in my_string.split(",")]

        # Reshape the input data to be two-dimensional
        mental_array = np.array(mental_list).reshape(1, -1)
        # print(mental_array)
        mental_prediction = model2.predict(mental_array)
        # print(mental_prediction)
        mental_prediction = np.round(mental_prediction)
        # print(mental_prediction)
        try:
            email=request.form.get('email')
            print(email)
            obj=user.query.filter_by(
                        email=email).first()
            print(obj)
            if obj != None:
                predict = json.dumps(mental_prediction.tolist()[0])
                print(predict)
                now = datetime.datetime.now()
                if now.month==1:
                    obj.jan=predict
                elif now.month==2:
                    obj.feb=predict
                elif now.month==3:
                    obj.mar=predict
                elif now.month==4:
                    obj.apr=predict
                elif now.month==5:
                    obj.may=predict
                elif now.month==6:
                    obj.jun=predict
                elif now.month==7:
                    obj.jul=predict
                elif now.month==8:
                    obj.aug=predict
                elif now.month==9:
                    obj.sep=predict
                elif now.month==10:
                    obj.oct=predict
                elif now.month==11:
                    print('nov')
                    obj.nov=predict
                elif now.month==12:
                    obj.dec=predict
                print(obj.nov)
                db.session.commit()
        except:
            traceback.print_exc()
        res = make_response(jsonify({'mental_report': mental_prediction.tolist()}))
        res.headers['Access-Control-Allow-Origin'] ='*'
        print(jsonify({'success':True,'mental_report': mental_prediction.tolist()}))
        print({'mental_report': mental_prediction.tolist()})
        return res
    except:
        res = make_response({'success':False})
        res.headers['Access-Control-Allow-Origin'] ='*'
        return res


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=443,ssl_context="adhoc")
