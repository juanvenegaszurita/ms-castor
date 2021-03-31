CREATE TABLE `plans` (
  `idplans` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  PRIMARY KEY (`idplans`)
);

CREATE TABLE `enterprisesplans` (
  `idEnterprisesPlans` int(11) NOT NULL AUTO_INCREMENT,
  `idplans` int(11) NOT NULL,
  `idEnterprise` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `nombreMes` varchar(50) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `pagado` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`idEnterprisesPlans`),
  KEY `fk_idplans_enterprisesplans` (`idplans`),
  KEY `fk_idEnterprise_enterprisesplans` (`idEnterprise`),
  CONSTRAINT `fk_idEnterprise_enterprisesplans` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idplans_enterprisesplans` FOREIGN KEY (`idplans`) REFERENCES `plans` (`idplans`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `historytasks` (
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

CREATE TABLE `transbanks` (
  `idTransbank` int(11) NOT NULL AUTO_INCREMENT,
  `idEnterprisesPlans` int(11) DEFAULT NULL,
  `idEnterprise` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `jsonTransbank` varchar(500) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `mes` int(11) DEFAULT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `buy_order` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`idTransbank`),
  KEY `fk_idEnterprise_transbank` (`idEnterprise`),
  KEY `fk_idEnterprisesPlans_transbanks` (`idEnterprisesPlans`),
  CONSTRAINT `fk_idEnterprise_transbank` FOREIGN KEY (`idEnterprise`) REFERENCES `enterprises` (`idEnterprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_idEnterprisesPlans_transbanks` FOREIGN KEY (`idEnterprisesPlans`) REFERENCES `enterprisesplans` (`idEnterprisesPlans`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

ALTER TABLE `enterprises` 
ADD COLUMN `isFree` TINYINT NULL DEFAULT 0 AFTER `descripcion`;

ALTER TABLE `users` 
ADD COLUMN `cumpleanos` datetime NULL AFTER `nombre`;

ALTER TABLE `userenterprises` 
ADD COLUMN `boss` varchar(100) DEFAULT NULL;

delimiter //
CREATE PROCEDURE createPlanEnterprise(IN idplans int, IN idEnterprise int, IN anio int)
BEGIN
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '1', 'Enero', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '2', 'Febrero', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '3', 'Marzo', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '4', 'Abril', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '5', 'Mayo', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '6', 'Junio', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '7', 'Julio', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '8', 'Agosto', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '9', 'Septiembre', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '10', 'Octubre', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '11', 'Noviembre', anio, 'false');
	INSERT INTO `enterprisesplans` (`idplans`, `idEnterprise`, `mes`, `nombreMes`, `anio`, `pagado`) VALUES (idplans, idplans, '12', 'Diciembre', anio, 'false');
END//

	