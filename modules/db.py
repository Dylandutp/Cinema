import pymysql

# Database Setting
db_settings = {
    "host": "35.77.173.217",
    "port": 3306,
    "user": "laundry",
    "password": "12345678",
    "db": "VIESHOW",
    "charset": "utf8"
}

# connect to Database
try:
    connection = pymysql.connect(**db_settings)
except Exception as ex:
    print(ex)

# Insert
def Insert(id, name, email, password, phone, birthday):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "INSERT INTO member(IDnumber, name, email, password, phone, birthday) VALUES(%s, %s, %s, %s, %s, %s)"
        try:
            cursor.execute(command, (id, name, email, password, phone, birthday))
            connection.commit()
        except:
           connection.rollback() 

# Update password
def UpdatePassword(id, email, password):
   connection.ping(reconnect=True) 
   with connection.cursor() as cursor:
        command = "UPDATE member SET password = '%s' WHERE IDnumber = '%s' AND email='%s'"
        try:
            cursor.execute(command % (password, id, email))
            connection.commit()
        except:
            connection.rollback() 

# Update email
def UpdateEmail(id, email):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "UPDATE member SET email = '%s' WHERE member_id = '%s'"
        try:
            cursor.execute(command % (email, id))
            connection.commit()
        except:
            connection.rollback()
        
# Update birthday
def UpdateBirth(memberID, date):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "UPDATE member SET birthday = '%s' , birthchange = 1 WHERE member_id = '%s'"
        try:
            cursor.execute(command % (date, memberID))
            connection.commit()
        except:
            connection.rollback()

# Login
def Login(email, password):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT member_ID, password FROM member WHERE email = '%s'"
        cursor.execute(command % email)
        result = cursor.fetchone()
        # print(result)
        if result == None:
            return False 
        if result[1] != password:
            return False 
        return result[0] 
        
# Check if the user register before
def isExist(id, email):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT * FROM member WHERE IDnumber = '%s' OR email='%s'"
        cursor.execute(command % (id, email))
        result = cursor.fetchone()
        if result == None:
            return False
        else:
            return True

# Check whether the password is same
def isRepeat(id, email, password):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT password FROM member WHERE IDnumber = '%s' AND email='%s'"
        cursor.execute(command % (id, email))
        result = cursor.fetchone()
        if result[0] == password:
            return True
        else:
            return False 

# Get user information
def getData(memberID):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT * FROM member WHERE member_id = '%s'"
        cursor.execute(command % (memberID))
        result = cursor.fetchone()
        return result
# Login("dylandutp@gmail.com", "Dylan0313")
# isExist('A130778745', 'dylandutp@gmail.com')
