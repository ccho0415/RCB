### Schema
CREATE DATABASE inventions_db;
USE inventions_db;

CREATE TABLE inventions
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

