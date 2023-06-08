from dbConnect import *
import readFilms
import time

def delete():
    idField = input("Enter the filmID of the of the film to be deleted: ")
    cursor.execute("DELETE FROM tblfilms WHERE filmID=" + idField)
    conn.commit()
    print(
        f"Record {idField} deleted from Films Table"
    )  
    time.sleep(3)  
    readFilms.read() 
  
# delete()