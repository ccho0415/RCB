USE im_db
CREATE TABLE movies 
(
	id INT AUTO_INCREMENT NOT NULL, 
	rating INT NOT NULL,
	title VARCHAR(255) NOT NULL,
	genre VARCHAR(255) NOT NULL, 
	PRIMARY KEY (id)
);



CREATE TABLE actors 
(
	id INT(12) AUTO_INCREMENT NOT NULL,
	name VARCHAR(120) NOT NULL,
	movie_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (movie_id) REFERENCES movies(id)
);

CREATE TABLE users 
(
	id INT(12) AUTO_INCREMENT NOT NULL, 
	username VARCHAR(255) NOT NULL,
 	password VARCHAR(255) NOT NULL, 
 	dateOfBirth DATE,
 	fav_movies INT NOT NULL, 
 	fav_actors INT NOT NULL, 
 	PRIMARY KEY (id),
 	FOREIGN KEY (fav_movies) REFERENCES movies(id),
 	FOREIGN KEY (fav_actors) REFERENCES actors(id) 
 );


CREATE TABLE movie_reviews 
(
	id INT(12) AUTO_INCREMENT NOT NULL,
	movie_id INT NOT NULL, 
	user_id INT NOT NULL, 
	review TEXT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (movie_id) REFERENCES movies(id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE actor_reviews 
(
	id INT(12) AUTO_INCREMENT NOT NULL, 
	actor_id INT NOT NULL, 
	user_id INT NOT NULL, 
	review TEXT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (actor_id) REFERENCES actors(id),
	FOREIGN KEY (user_id) REFERENCES users(id)

);