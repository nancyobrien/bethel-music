-- Seeing as we will be testing out this script alot we can destroy the db before creating everything again
DROP DATABASE IF EXISTS pcomusic;

-- Create the db
CREATE DATABASE pcomusic;

-- Move into the db
\c pcomusic

CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255) UNIQUE,
  name VARCHAR (255),
  url VARCHAR(500),
  last_confirmed_offset INT NOT NULL DEFAULT 0,
  archived BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE plans (
 id SERIAL PRIMARY KEY,
 pco_id VARCHAR (255) UNIQUE,
 plan_date DATE,
 url VARCHAR(500),
 venue_id INT NOT NULL REFERENCES venues (id),
 isInvalid BOOLEAN NOT NULL DEFAULT FALSE,
 isComplete BOOLEAN NOT NULL DEFAULT FALSE,
 songsFetched BOOLEAN NOT NULL DEFAULT FALSE,
 leadersFetched BOOLEAN NOT NULL DEFAULT FALSE,
 archived BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255) UNIQUE,
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
  pco_id VARCHAR (255) UNIQUE,
  url VARCHAR (500),
  full_name VARCHAR (255),
  first_name VARCHAR (255),
  last_name VARCHAR (255)
);

CREATE TABLE plan_song (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255) UNIQUE,
  url VARCHAR (500),
  plan_id INT NOT NULL REFERENCES plans (id),
  song_id INT NOT NULL REFERENCES songs (id),
  leader_id INT NULL REFERENCES leaders (id),
  song_key VARCHAR (50),
  description VARCHAR (500),
  slot INT,
  no_leader_found BOOLEAN NOT NULL DEFAULT FALSE,
  archived BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE plan_leader (
  id SERIAL PRIMARY KEY,
  pco_id VARCHAR (255) UNIQUE,
  url VARCHAR (500),
  plan_id INT NOT NULL REFERENCES plans (id),
  leader_id INT NULL REFERENCES leaders (id)
);