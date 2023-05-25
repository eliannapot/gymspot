CREATE TABLE User (
	username varchar PRIMARY KEY,
	email varchar,
	password varchar,
	admin binary
);

CREATE TABLE Gym (
	name varchar PRIMARY KEY
);

CREATE TABLE Membership (
	user varchar PRIMARY KEY,
	price integer,
	name varchar,
	starting_date datetime,
	end_date datetime,
	global binary
);

CREATE TABLE Services (
	name varchar PRIMARY KEY,
	price integer
);

CREATE TABLE Bookings (
	user varchar PRIMARY KEY,
	service varchar,
	at varchar,
	date datetime
);

CREATE TABLE Programs (
	name varchar PRIMARY KEY,
	time varchar,
	difficulty integer,
	descriptions varchar
);

CREATE TABLE Signs_up (
	user_id varchar PRIMARY KEY,
	program varchar,
	at varchar,
	date datetime
);

CREATE TABLE Gives_access (
	membership varchar PRIMARY KEY ,
	gym varchar
);

CREATE TABLE Visited (
	user varchar PRIMARY KEY,
	gym varchar,
	date datetime 
);





