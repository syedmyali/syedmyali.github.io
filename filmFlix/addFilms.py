from dbConnect import *
import time
def films():
    filmList = []
    title = input("Enter Film Title: ").title()
    yearReleased = input("Enter Releasing Year of the Film: ")
    rating = input("Enter Rating of the Film: ").upper()
    duration = input("Enter Duration of the Film: ")
    genre = input("Enter Genre of the Film: ").title()

    filmList.append(title)
    filmList.append(yearReleased)
    filmList.append(rating)
    filmList.append(duration)
    filmList.append(genre)

    cursor.execute("INSERT INTO tblfilms VALUES(NULL, ?,?,?,?,?)", filmList)
    conn.commit() 
    print(f"{title} added to films table") 
    time.sleep(3) 

    
    cursor.execute("SELECT * FROM tblfilms") 
    row = cursor.fetchall() 
    for record in row: 
        print(record) 
# films()  