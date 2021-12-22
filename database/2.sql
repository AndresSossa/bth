create table tb_cargo(
    Id_cargo int not null auto_increment,
    Nombre_cargo varchar(45) not null,
    Usuario_actualiza varchar(45),
    Fecha_ingreso datetime,
    primary key (Id_cargo));

create table tb_eps(
    Id_eps int not null auto_increment,
    Codigo_eps varchar (50) not null,
    Nit_eps int (45) not null,
    Razon_Social varchar (50) not null,
    Usuario_actualiza varchar(45),
    Fecha_ingreso datetime,
    primary key (Id_eps));

CREATE TABLE tb_caja_comp (
    Id_caja_comp INT NOT NULL AUTO_INCREMENT,
    Codigo VARCHAR(45) NOT NULL,
    NIT INT(13) NOT NULL,
    Razon_social VARCHAR(45) NOT NULL,
    Afiliado_corser BOOLEAN NOT NULL,
    Usuario_actualiza Varchar(45),
    Fecha_ingreso datetime,
    PRIMARY KEY(Id_caja_comp));

CREATE TABLE tb_tipo_contrato(
    Id_tipo_contrato INT NOT NULL AUTO_INCREMENT,
    Tipo_contrato VARCHAR(45) NOT NULL,
    Usuario_actualiza VARCHAR(45),
    Fecha_ingreso DATETIME,
    PRIMARY KEY(Id_tipo_contrato));

CREATE TABLE tb_centro_costo (
Id_centro_costo INT NOT NULL AUTO_INCREMENT,
Centro_costo VARCHAR(45) NOT NULL,
Usuario_actualiza VARCHAR(45),
Fecha_ingreso DATETIME,
PRIMARY KEY (Id_centro_costo));
	Fecha_ingreso datetime,
    primary key (Id_eps));

create table tb_pensiones(
    Id_pens int not null auto_increment,
    Codigo_pens varchar (50) not null,
    Nit_pens int (45) not null,
    Razon_Social varchar (50) not null,
    Usuario_actualiza varchar(45),
	Fecha_ingreso datetime,
    primary key (Id_pens));

create table tb_cesantias(
    Id_ces int not null auto_increment,
    Tipo_ces varchar (50) not null,
    Usuario_actualiza varchar(45),
	Fecha_ingreso datetime,
    primary key (Id_ces));
