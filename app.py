from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from itsdangerous import URLSafeTimedSerializer as Serializer
from itsdangerous import SignatureExpired, BadSignature
from modules.model import send_eamil
import modules.db as DB

app = Flask(__name__)
app.secret_key = "#fdjklas2323jgfdaiombjkasdfjwoeruffcfxadkl"



@app.route("/")
def main_page():
    if request.method == "POST":
        data = request.get_json()
        session_id = data.get('session_id', None)
        
    else:
        return render_template('front-page.html')
    
    
# Get theater
@app.route("/theater")
def get_theater():
    theater = DB.getTheater()
    # movie = DB.getMovieInfo()
    # data = [theater, movie] 
    return jsonify(theater)


# Get Movie
@app.route("/movie", methods=["POST", "GET"])
def get_movie():
    if request.method == "POST":
        data = request.get_json()
        theater_id = data.get('theater_id', None)
        movie = DB.getMovie(theater_id)
        return jsonify(movie)


# Get Showing
@app.route("/showing", methods=["POST", "GET"])
def get_showing():
    if request.method == "POST":
        data = request.get_json()
        movie_id = data.get('movie_id', None)
        theater_id = data.get('theater_id', None)
        showing = DB.getShowing(theater_id, movie_id)
        return jsonify(showing)


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


# Reset Password 
@app.route("/reset_password/<token>", methods=["POST", "GET"])
def reset_password(token):
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
            DB.UpdatePassword(data[0], data[1], password)
            return jsonify({'repeat': False})
    else:
        return render_template('password-change2.html', token = token)


# Reset Email
@app.route("/reset_email", methods=["POST", "GET"])
def reset_email():
    if not "user" in session:
        redirect(url_for("login"))
    memberID = session["user"]
    if request.method == "POST":
        email = request.form["email"]
        if DB.isExist('1', email):
            return jsonify({'exist': True})
        reset_serializer = Serializer(app.config['SECRET_KEY'])
        token = reset_serializer.dumps([memberID, email])
        html = render_template('email_reset_email.html', user='user', token=token)
        send_eamil("Confirm Email", email, 'html', message=html)
        return jsonify({'exist': False})
    else:
        # data => [memberID, ID, name, email, password, phone, birthdate, points]
        return render_template("account-change.html", memberID = memberID)
        

# Change birthday
@app.route("/change_birthday", methods=["POST", "GET"])
def change_birthdate():
    if not "user" in session:
        return redirect(url_for("login"))
    memberID = session["user"]
    if request.method == "POST":
        birthday = request.form["birthday"]
        DB.UpdateBirth(memberID, birthday)
        return jsonify({'success': True})
    else:
        return render_template("birth-change.html")
    
    
# User Page
@app.route("/user")
def user():
    if "user" in session:
        memberID = session["user"]
        # data => [memberID, ID, name, email, password, phone, birthdate, points, isChanged]
        data = DB.getData(memberID)
        return render_template("member-info.html", email = data[3], ID = data[1], birthdate = str(data[6]), phone = data[5], points = data[7], ischange = data[8])
    else:
        return redirect(url_for("login"))
    

# Logout
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))


# change seccessful
@app.route("/success_change/<token>")
def success_change(token):
    s = Serializer(app.config['SECRET_KEY'])
    try:
        # data => [memberID, email]
        data = s.loads(token)
    except:
        return "Fail"
    if not data:
        return "Wrong token"
    DB.UpdateEmail(data[0], data[1])
    return render_template("success_change.html")


if __name__ == '__main__':
    app.run()
