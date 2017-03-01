-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int(11) NOT NULL,
  attitude varchar(30) NOT NULL
);

-- Inserted a set of records into the table
INSERT INTO actors (name) VALUES ("Yarg");
INSERT INTO actors (name) VALUES ("Har");
INSERT INTO actors (name) VALUES ("Dar");
INSERT INTO actors (name) VALUES ("Bob");

INSERT INTO actors (coolness_points) VALUES ("100");
INSERT INTO actors (coolness_points) VALUES ("200");
INSERT INTO actors (coolness_points) VALUES ("300");
INSERT INTO actors (coolness_points) VALUES ("400");

INSERT INTO actors (attitude) VALUES ("lame");
INSERT INTO actors (attitude) VALUES ("nerd");
INSERT INTO actors (attitude) VALUES ("geek");
INSERT INTO actors (attitude) VALUES ("steve");