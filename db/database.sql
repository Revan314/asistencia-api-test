CREATE DATABASE Asistencia_db;

USE  Asistencia_db;

CREATE TABLE users(
id INT NOT NULL  AUTO_INCREMENT,
nombre_Usuario varchar(50),
contraseña_Usuario varchar(255) ,
PRIMARY KEY (id)
);

CREATE TABLE grupos(
id_grupo int not null auto_increment,
nombre_Grupo varchar(50),
carrera_Grupo varchar(50),
turno_Grupo varchar(50),
PRIMARY KEY (id_grupo)
);

CREATE TABLE alumnos(
matricula_Alumnos int(8) not null  unique,
nombre_Alumnos varchar(50),
id_grupoA INT NOT NULL,
PRIMARY KEY (matricula_Alumnos),
FOREIGN KEY (id_grupoA) REFERENCES grupos(id_grupo)
);




CREATE TABLE asistencia (
    matricula_Alumnos INT(8) NOT NULL,
    id_grupo INT NOT NULL,
    fecha DATE NOT NULL,
    estado ENUM('Asistencia', 'Falta', 'Retardo') NOT NULL,
    justificado BOOLEAN NOT NULL DEFAULT FALSE,  -- Indica si la falta está justificada o no
    PRIMARY KEY (matricula_Alumnos, id_grupo, fecha),
    FOREIGN KEY (matricula_Alumnos) REFERENCES alumnos(matricula_Alumnos),
    FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo)
);


DESCRIBE grupos;

INSERT INTO grupos VALUES
(1,'Isof1', 'Ingenieria en Software', 'matutino'),
(2,'Lnut1', 'Licenciatura en Nutrición ', 'vespertino'),
(3,'Lfis2', 'Licenciatura en Fisioterapia', 'matutino')
