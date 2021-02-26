CREATE TABLE `castor`.`enterprises` (
  `idEnterprise` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEnterprise`)
);

CREATE TABLE `castor`.`projects` (
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

CREATE TABLE `castor`.`statustasks` (
  `idStatus` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `posicion` int(11) NOT NULL,
  `isStateChange` tinyint(4) NOT NULL,
  `idEnterprise` int(11) NOT NULL,
  PRIMARY KEY (`idStatus`),
  KEY `fk_idEnterprise_statustasks` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_statustasks` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `castor`.`users` (
  `UID` varchar(100) NOT NULL,
  `idEnterprise` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `cargo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  KEY `fk_idEnterprise_user` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_user` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `castor`.`tasks` (
  `idTask` int(11) NOT NULL AUTO_INCREMENT,
  `idProject` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `details` varchar(100) DEFAULT NULL,
  `assignedUser` varchar(100) DEFAULT NULL,
  `idStatus` int(11) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idTask`),
  KEY `fk_idProject_tasks` (`idProject`),
  KEY `fk_assignedUser_user` (`assignedUser`),
  KEY `fk_idStatus_statusTask` (`idStatus`),
  CONSTRAINT `fk_assignedUser_user` FOREIGN KEY (`assignedUser`) REFERENCES `user` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idProject_tasks` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idStatus_statusTask` FOREIGN KEY (`idStatus`) REFERENCES `statustasks` (`idStatus`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `castor`.`enterprises` (`idEnterprise`, `nombre`, `descripcion`) VALUES ('', 'Empresa S.A.', 'La mejor empresa');

INSERT INTO `castor`.`user` (`UID`, `idEnterprise`, `email`, `nombre`, `cargo`) VALUES ('0Ffuewdnk3fKpsiXO2lOO3s1KdH2', '1', 'juan.venegas@siigroup.cl', 'Juan Venegas', 'Jefe');

INSERT INTO `castor`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Por Hacer', '1', 1, '1');
INSERT INTO `castor`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Haciendo', '2', 1, '1');
INSERT INTO `castor`.`statustasks` (`name`, `posicion`, `isStateChange`, `idEnterprise`) VALUES ('Finalizado', '3', 0, '1');