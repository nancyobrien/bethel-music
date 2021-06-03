-- Seeing as we will be testing out this script alot we can destroy the db before creating everything again
DROP DATABASE IF EXISTS pcomusic;

-- Create the db
CREATE DATABASE pcomusic;

-- Move into the db
\c pcomusic

CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255),
  name VARCHAR (255),
  url VARCHAR(500)
);

CREATE TABLE plans (
 id SERIAL PRIMARY KEY,
 pco_id VARCHAR (255),
 plan_date DATE,
 url VARCHAR(500),
 venue_id INT NOT NULL REFERENCES venues (id)
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255),
  title VARCHAR (255),
  url VARCHAR(500),
  song_length VARCHAR (255),
  copyright VARCHAR (500),
  author VARCHAR (500),
  ccli_number VARCHAR (50),
  tags VARCHAR (255),
  song_admin VARCHAR (255),
  archive BOOLEAN NOT NULL DEFAULT FALSE,
  is_christmas BOOLEAN NOT NULL DEFAULT FALSE,
  default_slot INT NOT NULL DEFAULT 0
);

CREATE TABLE leaders (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255),
  url VARCHAR (500),
  name VARCHAR (255)
);

CREATE TABLE plan_song (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255),
  url VARCHAR (500),
  plan_id INT NOT NULL REFERENCES plans (id),
  song_id INT NOT NULL REFERENCES songs (id),
  leader_id INT NOT NULL REFERENCES leaders (id),
  song_key VARCHAR (50),
  slot INT
);