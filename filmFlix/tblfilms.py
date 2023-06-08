from dbConnect import *



cursor.execute(""" 

CREATE TABLE "tblfilms" (
	"filmID"	INTEGER NOT NULL UNIQUE,
	"title"	TEXT,
	"yearReleased"	INTEGER,
	"rating"	TEXT,
    "duration" INTEGER,
    "genre" TEXT,
	PRIMARY KEY("filmID" AUTOINCREMENT)
)"""
)