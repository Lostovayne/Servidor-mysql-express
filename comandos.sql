-- Active: 1687995790268@@127.0.0.1@3306
CREATE DATABASE plantilla2;

use plantilla2;

create Table
    users (
        id int primary key auto_increment,
        email varchar(100) not null,
        password varchar(100) not null
    );