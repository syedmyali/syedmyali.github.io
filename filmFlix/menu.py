import readFilms
import addFilms
import updateFilms
import deleteFilms

def menuOptions():
    options = 0 
    while options not in ["1","2","3","4","5"]:
        print(
                """Films Menu Options:\nOption 1) If You Want to Print All Films, Enter 1.
Option 2) If You Want to Add New Film, Enter 2.
Option 3) If You Want to Update Any Listed Film, Enter 3.
Option 4) If You Want to Delete Any Film, Enter 4.
option 5) To Exit the menu, Enter 5"""
            )   
        options = input("\nEnter one of the options above: ")
        if options not in ["1","2","3","4","5"]:
            print(f"{options} is not a valid choice!")
    return options

mainProgram = True 
while mainProgram == True: 
    mainMenu = menuOptions()
    if mainMenu == "1": 
        readFilms.read() 
    elif mainMenu == "2":
        addFilms.films()
    elif mainMenu == "3":
        updateFilms.update()
    elif mainMenu == "4":
        deleteFilms.delete()
    else:
        mainProgram = False
input ("Press Enter to Confirm Your Exit:")
    

# menuOptions()