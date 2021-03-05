drop database heroku_6152d05fd720d66;
create database heroku_6152d05fd720d66;

CREATE TABLE `heroku_6152d05fd720d66`.`enterprises` (
  `idEnterprise` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEnterprise`)
);

CREATE TABLE `heroku_6152d05fd720d66`.`projects` (
  `idProject` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `descriptions` varchar(500) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `idEnterprise` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProject`),
  KEY `fk_idEnterprise_projects` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_projects` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`statustasks` (
  `idStatus` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `posicion` int(11) NOT NULL,
  `isStateChange` tinyint(4) NOT NULL,
  `idEnterprise` int(11) NOT NULL,
  PRIMARY KEY (`idStatus`),
  KEY `fk_idEnterprise_statustasks` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_statustasks` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`users` (
  `UID` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UID`)
);

CREATE TABLE `heroku_6152d05fd720d66`.`tasks` (
  `idTask` int(11) NOT NULL AUTO_INCREMENT,
  `idProject` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `details` varchar(100) DEFAULT NULL,
  `assignedUser` varchar(100) DEFAULT NULL,
  `idStatus` int(11) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT current_timestamp(),
  `isDelete` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`idTask`),
  KEY `fk_idProject_tasks` (`idProject`),
  KEY `fk_assignedUser_user` (`assignedUser`),
  KEY `fk_idStatus_statusTask` (`idStatus`),
  CONSTRAINT `fk_assignedUser_user` FOREIGN KEY (`assignedUser`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idProject_tasks` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idStatus_statusTask` FOREIGN KEY (`idStatus`) REFERENCES `statustasks` (`idStatus`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE `heroku_6152d05fd720d66`.`userenterprises` (
  `UID` varchar(100) NOT NULL,
  `idEnterprise` int NOT NULL,
  `isAdmin` TINYINT NULL DEFAULT 0,
  `cargo` varchar(20) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  KEY `fk_idEnterprise_userenterprises` (`idEnterprise`),
  KEY `fk_UID_userenterprises` (`UID`),
  CONSTRAINT `fk_UID_userenterprises` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idEnterprise_userenterprises` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`actions` (
  `idActions` INT NOT NULL AUTO_INCREMENT,
  `idTask` INT NULL,
  `descriptions` VARCHAR(500) NULL,
  `assignedUser` VARCHAR(100) NULL,
  `CREATE_DATE` DATETIME NULL DEFAULT current_timestamp,
  `editable` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idActions`),
  CONSTRAINT `fk_idTask_actions` FOREIGN KEY (`idTask`) REFERENCES `heroku_6152d05fd720d66`.`tasks` (`idTask`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`historytasks` (
  `idHistoryTask` int(11) NOT NULL AUTO_INCREMENT,
  `nameTable` varchar(45) NOT NULL,
  `descriptions` varchar(500) NOT NULL,
  `CREATE_DATE` datetime NOT NULL,
  `UID` varchar(100) NOT NULL,
  `idTask` int(11) NOT NULL,
  PRIMARY KEY (`idHistoryTask`),
  KEY `fk_historyTask_UID` (`UID`),
  KEY `fk_historytask_idTask` (`idTask`),
  CONSTRAINT `fk_historyTask_UID` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_historytask_idTask` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`idTask`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `heroku_6152d05fd720d66`.`enterprises` (`idEnterprise`, `nombre`, `descripcion`) VALUES ('', 'Empresa S.A.', 'La mejor empresa');
INSERT INTO `heroku_6152d05fd720d66`.`enterprises` (`idEnterprise`, `nombre`, `descripcion`) VALUES ('', 'Wede S.A.', 'Wede');

INSERT INTO `heroku_6152d05fd720d66`.`users` (`UID`, `email`, `nombre`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2', 'juan.venegas@siigroup.cl', 'Juan Venegas');
INSERT INTO `heroku_6152d05fd720d66`.`users` (`UID`, `email`, `nombre`) VALUES ('sxwOjVS191flw4yK4TLV7OgprZs1', 'joseph.venegas02@gmail.com', 'Joseph Venegas');

INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2',1, 1, 'Jefe');
INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2',2, 1, 'Contador');
INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('sxwOjVS191flw4yK4TLV7OgprZs1',1, 1, 'Contador');

INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Pendiente', '1', 1, '1');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Proceso', '2', 1, '1');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Finalizado', '3', 0, '1');

INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Pendiente', '1', 1, '2');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Proceso', '2', 1, '2');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Finalizado', '3', 0, '2');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Rechazado', '4', 0, '2');






















/* ******* */
CREATE TABLE `heroku_6152d05fd720d66`.`enterprises` (
  `idEnterprise` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEnterprise`)
);

CREATE TABLE `heroku_6152d05fd720d66`.`projects` (
  `idProject` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `descriptions` varchar(500) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `idEnterprise` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProject`),
  KEY `fk_idEnterprise_projects` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_projects` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`statustasks` (
  `idStatus` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `posicion` int(11) NOT NULL,
  `isStateChange` tinyint(4) NOT NULL,
  `idEnterprise` int(11) NOT NULL,
  PRIMARY KEY (`idStatus`),
  KEY `fk_idEnterprise_statustasks` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_statustasks` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`users` (
  `UID` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UID`)
);

CREATE TABLE `heroku_6152d05fd720d66`.`tasks` (
  `idTask` int(11) NOT NULL AUTO_INCREMENT,
  `idProject` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `details` varchar(100) DEFAULT NULL,
  `assignedUser` varchar(100) DEFAULT NULL,
  `idStatus` int(11) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT current_timestamp(),
  `isDelete` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`idTask`),
  KEY `fk_idProject_tasks` (`idProject`),
  KEY `fk_assignedUser_user` (`assignedUser`),
  KEY `fk_idStatus_statusTask` (`idStatus`),
  CONSTRAINT `fk_assignedUser_user` FOREIGN KEY (`assignedUser`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idProject_tasks` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idStatus_statusTask` FOREIGN KEY (`idStatus`) REFERENCES `statustasks` (`idStatus`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE `heroku_6152d05fd720d66`.`userenterprises` (
  `UID` varchar(100) NOT NULL,
  `idEnterprise` int NOT NULL,
  `isAdmin` TINYINT NULL DEFAULT 0,
  `cargo` varchar(20) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  KEY `fk_idEnterprise_userenterprises` (`idEnterprise`),
  KEY `fk_UID_userenterprises` (`UID`),
  CONSTRAINT `fk_UID_userenterprises` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idEnterprise_userenterprises` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`actions` (
  `idActions` INT NOT NULL AUTO_INCREMENT,
  `idTask` INT NULL,
  `descriptions` VARCHAR(500) NULL,
  `assignedUser` VARCHAR(100) NULL,
  `CREATE_DATE` DATETIME NULL DEFAULT current_timestamp,
  `editable` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idActions`),
  CONSTRAINT `fk_idTask_actions` FOREIGN KEY (`idTask`) REFERENCES `heroku_6152d05fd720d66`.`tasks` (`idTask`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `heroku_6152d05fd720d66`.`historytasks` (
  `idHistoryTask` int(11) NOT NULL AUTO_INCREMENT,
  `nameTable` varchar(45) NOT NULL,
  `descriptions` varchar(500) NOT NULL,
  `CREATE_DATE` datetime NOT NULL,
  `UID` varchar(100) NOT NULL,
  `idTask` int(11) NOT NULL,
  PRIMARY KEY (`idHistoryTask`),
  KEY `fk_historyTask_UID` (`UID`),
  KEY `fk_historytask_idTask` (`idTask`),
  CONSTRAINT `fk_historyTask_UID` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_historytask_idTask` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`idTask`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `heroku_6152d05fd720d66`.`enterprises` (`idEnterprise`, `nombre`, `descripcion`) VALUES ('', 'Empresa S.A.', 'La mejor empresa');
INSERT INTO `heroku_6152d05fd720d66`.`enterprises` (`idEnterprise`, `nombre`, `descripcion`) VALUES ('', 'Wede S.A.', 'Wede');

INSERT INTO `heroku_6152d05fd720d66`.`users` (`UID`, `email`, `nombre`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2', 'juan.venegas@siigroup.cl', 'Juan Venegas');
INSERT INTO `heroku_6152d05fd720d66`.`users` (`UID`, `email`, `nombre`) VALUES ('sxwOjVS191flw4yK4TLV7OgprZs1', 'joseph.venegas02@gmail.com', 'Joseph Venegas');

INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2',4, 1, 'Jefe');
INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2',14, 1, 'Contador');
INSERT INTO `heroku_6152d05fd720d66`.`userenterprises` (`UID`, `idEnterprise`, `isAdmin`, `cargo`) VALUES ('sxwOjVS191flw4yK4TLV7OgprZs1',4, 1, 'Contador');

INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Pendiente', '1', 1, '4');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Proceso', '2', 1, '4');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Finalizado', '3', 0, '4');

INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Pendiente', '1', 1, '14');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Proceso', '2', 1, '14');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Finalizado', '3', 0, '14');
INSERT INTO `heroku_6152d05fd720d66`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Rechazado', '4', 0, '14');