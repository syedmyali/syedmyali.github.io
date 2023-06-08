
from dbConnect import *
import readFilms
import time

def update():
    idField = input("Enter the filmID of the film to be udated: ")
    fieldName = input("Which field would you like to update: (Title, Year Released, Rating, Duration, Genre)? ").title()
    fieldValue = input(f"Enter the new value for the {fieldName} field: ")
    print(f"The new value entered is {fieldValue}")

    fieldValue = "'" + fieldValue + "'"
    print(f"The new field value with single quotes added {fieldValue} after")

    cursor.execute(f"UPDATE tblfilms SET {fieldName} = {fieldValue} WHERE filmID = {idField}")
    conn.commit()
    print(f"Record {idField} updated successfully")
    time.sleep(3)
    readFilms.read()

# update()