const db = require('./../services/db');

const userTable = `CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(255) NOT NULL,
    access_token varchar(255) NOT NULL,
    active int NOT NULL DEFAULT 0,
    PRIMARY KEY (ID)
);`;

const vehicleTable = `CREATE TABLE IF NOT EXISTS vehicle(
    plate varchar(10) NOT NULL,
    model varchar(50),
    color varchar(30), 
    year int,
    PRIMARY KEY(plate)
);`

const coordTable = `CREATE TABLE IF NOT EXISTS coordinates(
    id int NOT NULL AUTO_INCREMENT,
    plate varchar(10) NOT NULL,
    lat float(10,7) NOT NULL, 
    lng float(10,7) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (plate) REFERENCES vehicle(plate)
);`


//db.test_connection();

db.query(userTable);
//db.query(vehicleTable);
//db.query(coordTable);
