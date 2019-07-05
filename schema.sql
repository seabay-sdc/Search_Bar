DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

USE fec;

CREATE TABLE searchterms (
  id int NOT NULL AUTO_INCREMENT,
  searchterm varchar(69) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


-- INSERT INTO users (id, name, balance) VALUES (1, "beth", 1915.96);
