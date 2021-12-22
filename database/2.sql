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
