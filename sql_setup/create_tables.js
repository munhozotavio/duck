const db = require('./../services/db');

const userTable = `CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL,
    name varchar(50) NOT NULL,
    RA varchar(6) NOT NULL, 
    email varchar(100) NOT NULL,
    password varchar(50) NOT NULL,
    access_token varchar(255) NOT NULL,
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
    id int NOT NULL,
    plate varchar(10) NOT NULL,
    lat float(10,7) NOT NULL, 
    long float(10,7) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (plate) REFERENCES vehicle(plate)
);`

//db.query(userTable);
//db.query(vehicleTable);
//db.query(coordTable);