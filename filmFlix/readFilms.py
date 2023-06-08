from dbConnect import *
def read():
    cursor.execute("SELECT * FROM tblfilms") 
    row = cursor.fetchall()  
    for record in row: 
        print(record)
# read()