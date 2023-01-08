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
            cursor.execute(command, (id, name, email,
                           password, phone, birthday))
            connection.commit()
        except:
            connection.rollback()


# Insert order
def InsertOrder(member_id, session_id, ticket, seats, foods):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "INSERT INTO orders(member_id, session_id) VALUES(%s, %s)"
        try:
            cursor.execute(command, (member_id, session_id))
            connection.commit()
        except:
            connection.rollback()
    
    with connection.cursor() as cursor:
        command = "SELECT order_id FROM orders WHERE member_id = '%s' AND session_id = '%s'"
        cursor.execute(command % (member_id, session_id))
        for record in cursor:
            order_id = record[0]
    
    with connection.cursor() as cursor:
        command = "INSERT INTO ticket_order(order_id, regular, concession, elder) VALUES(%s, %s, %s, %s)"
        try:
            cursor.execute(command, (order_id, ticket[0], ticket[1], ticket[2]))
            connection.commit()
        except:
            connection.rollback()

    seat = []
    with connection.cursor() as cursor:
        for item in seats:
            row = item.get('x')
            col = item.get('y')
            command = "SELECT seat_id FROM seat WHERE seat.row = %s AND seat.col = %s"
            cursor.execute(command % (row, col))
            for record in cursor:
                seat.append(record[0])
    with connection.cursor() as cursor:
        for item in seat:
            command = "INSERT INTO seat_order(order_id, seat_id, session_id) VALUES(%s, %s, %s)"
            try:
                cursor.execute(command, (order_id, item, session_id))
                connection.commit()
            except:
                connection.rollback()
    with connection.cursor() as cursor:
        for i in range(3):
            if foods[0][i] != 0:
                command = "INSERT INTO food_order(order_id, food_id, number) VALUES(%s, %s, %s)"
                try:
                    cursor.execute(command, (order_id, i + 1, foods[0][i])) 
                    connection.commit()
                except:
                    connection.rollback()
    with connection.cursor() as cursor:
        if foods[1] != 0:
            try:
                cursor.execute(command, (order_id, 4, foods[1])) 
                connection.commit()
            except:
                connection.rollback()
    with connection.cursor() as cursor:
        if foods[2] != 0:
            try:
                cursor.execute(command, (order_id, 5, foods[2])) 
                connection.commit()
            except:
                connection.rollback()
    with connection.cursor() as cursor:
        for i in range(3):
            if foods[3][i] != 0:
                try:
                    cursor.execute(command, (order_id, i + 6, foods[3][i])) 
                    connection.commit()
                except:
                    connection.rollback()
    return order_id


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
        command = "SELECT password FROM member WHERE IDnumber = '%s' AND email = '%s'"
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


# Get theater information
def getTheater():
    connection.ping(reconnect=True)
    result = []
    with connection.cursor() as cursor:
        command = "SELECT name FROM theaters"
        cursor.execute(command)
        result = []
        for record in cursor:
            result.append(record[0])
        return result
    
# Get Showing information
def getShowing(theater_id, movie_id):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT sessions.session_id, sessions.date, sessions.start_time FROM sessions WHERE theater_id = '%s' AND movie_id = '%s'"
        cursor.execute(command % (theater_id, movie_id))
        result = []
        for record in cursor:
            tmp = dict(id=record[0],
                       date=str(record[1]),
                       start_time=record[2])
            result.append(tmp)
        return result


# Get movie information
def getMovie(theater_id):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT movie.movie_id, movie.name, movie.image_link FROM movie NATURAL JOIN released_movie WHERE theater_id = '%s'"
        cursor.execute(command % theater_id)
        result = []
        for record in cursor:
            tmp = dict(id=record[0],
                       name=record[1],
                       img=record[2])
            result.append(tmp)
        return result


# Get order information
def getOrderInfo(order_id):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT theaters.name, movie.name, sessions.date, sessions.start_time, member.name, member.email FROM `orders` NATURAL JOIN sessions INNER JOIN theaters USING (theater_id) INNER JOIN movie USING (movie_id) INNER JOIN member USING (member_id) WHERE order_id = '%s'"
        cursor.execute(command % order_id)
        for record in cursor:
            result = dict(theater_name = record[0],
                       movie_name = record[1],
                       date = str(record[2]),
                       time = record[3],
                       member_name = record[4],
                       email = record[5])
        return result 


# Get selled seat
def getSellSeat(session_id):
    connection.ping(reconnect=True)
    with connection.cursor() as cursor:
        command = "SELECT seat.row, seat.col FROM seat_order NATURAL JOIN seat WHERE session_id = %s"
        cursor.execute(command % session_id)
        result = []
        for record in cursor:
            tmp = dict(row = record[0],
                       col = record[1])
            result.append(tmp)
        return result 
    
# Login("dylandutp@gmail.com", "Dylan0313")
# isExist('A130778745', 'dylandutp@gmail.com')