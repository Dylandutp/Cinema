from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from itsdangerous import URLSafeTimedSerializer as Serializer
from itsdangerous import SignatureExpired, BadSignature
from modules.model import send_eamil
import modules.db as DB

app = Flask(__name__)
app.secret_key = "#fdjklas2323jgfdaiombjkasdfjwoeruffcfxadkl"

@app.route("/")
def hello():
    return "Hello, World!"
    
# Login Page
@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["pwd"]
        memberID = DB.Login(email, password)
        if not memberID:
            return jsonify({'login': False})
        session["user"] = memberID
        return jsonify({'login': True})
    else:
        if "user" in session:
            return redirect(url_for("user"))
        return render_template('log-in-1.html')

    # return DB.Insert(1, 'A130778745', 'Dylan', 'dylandutp@gmail.com', 'Dylan0313', '0955051977')

# Sign up 
@app.route("/register", methods=["POST", "GET"])
def register():
    if "user" in session:
        return redirect(url_for("user"))
    if request.method == "POST":
        data = request.form.to_dict()
        if DB.isExist(data.get('id_code'), data.get('email')):
            return jsonify({'exist': True})
        else:
            DB.Insert(data.get('id_code'), data.get('name'), data.get('email'), data.get('pwd'), data.get('phone_num'), data.get('birth_date'))
            return jsonify({'exist': False})
    else:
        return render_template('sign-up.html')

# Forget password
@app.route("/user_confirm", methods=["POST", "GET"])
def user_confirm():
    if "user" in session:
        return redirect(url_for("user"))
    if request.method == "POST":
        data = request.form.to_dict()
        if DB.isExist(data.get('ID'), data.get('email')):
            password_reset_serializer = Serializer(app.config['SECRET_KEY'])
            token = password_reset_serializer.dumps([data.get('ID'), data.get('email')])
            html = render_template('password_reset_email.html', user='user', token=token)
            send_eamil("Reset Password", data.get('email'), 'html', message=html)
            return jsonify({'exist': True})
        else:
            return jsonify({'exist': False})
    else:
        return render_template('password-change1.html')

# User confirm
@app.route("/reset_password/<token>", methods=["POST", "GET"])
def reset_password(token):
    if "user" in session:
        return redirect(url_for("user"))
    s = Serializer(app.config['SECRET_KEY'])
    try:
        # data[0] => id , data[1] => email
        data = s.loads(token)
    except:
        return "Fail"
    if not data:
        return "Wrong token"
    if request.method == "POST":
        password = request.form['pwd']
        if DB.isRepeat(data[0], data[1], password):
            return jsonify({'repeat': True})
        else:
            DB.Update(data[0], data[1], password)
            return jsonify({'repeat': False})
    else:
        return render_template('password-change2.html', token = token)

# User Page
@app.route("/user")
def user():
    if "user" in session:
        user = session["user"]
        return render_template("user.html", user=user)
    else:
        return redirect(url_for("login"))
    
# Logout
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))

if __name__ == '__main__':
    app.run()
