create database SkilledCloud;
use SkilledCloud;

create table Fabricante(
idFabricante int primary key auto_increment,
cnpj varchar(45),
cep char(8),
endereco varchar(100),
email varchar(45)
);

create table Colaborador(
idColaborador int primary key auto_increment,
nome varchar(45),
email_login varchar(45)
);

create table Medida(
idMedida int primary key auto_increment,
temperatura double,
umidade double,
data_hora datetime 
);

create table sensor(
idSensor int primary key auto_increment,
statusSensor varchar(45), constraint estadoSensor check (statusSensor = "Ativo" or statusSensor = "inativo" or statusSensor = "manutenção")
);

create table Geladeira(
idGeladeira int primary key auto_increment,
statusGeladeira varchar(45), constraint estadoGeladeira check 
	(statusGeladeira = "Ativo" or statusGeladeira = "inativo" or statusGeladeira = "manutenção"),
andarGeladeira varchar (45),
salaGeladeira varchar(45)
);

create table GeladeiraXVacina(
dataEntrada datetime,
dataSaida datetime
);

create table vacina(
idVacina int primary key auto_increment,
nomeVacina varchar (45),
temperaturaIdeal double,
umidadeIdeal double,
validade date
);

alter table Colaborador add column fkFabricante int, add foreign key (fkFabricante) references Fabricante(idFabricante);
alter table Medida add column fkSensor int, add foreign key (fkSensor) references Sensor(idSensor);
alter table Sensor add column fkGeladeira int, add foreign key (fkGeladeira) references Geladeira(idGeladeira);
alter table Geladeira add column fkFabricante int, add foreign key (fkFabricante) references Fabricante(idFabricante);
alter table GeladeiraXVacina add column fkVacina int, add foreign key (fkVacina) references Vacina(idVacina);
alter table GeladeiraXVacina add column fkGeladeira int, add foreign key (fkGeladeira) references Geladeira(idGeladeira);

desc Fabricante;
alter table Fabricante add column nomeFabricante varchar(45);

desc Fabricante;
desc Colaborador;
desc Medida;
desc Sensor;
desc Geladeira;
desc Vacina;
desc GeladeiraXVacina;
 
insert into Fabricante values
(null, '23.234.234/0001-23', '02823050', 'Rua dos Patos', 'acesso.lab@patos.com.br', 'Lab Patos'),
(null, '21.321.123/0001-12', '02954060', 'Rua das Flores', 'acesse.lab@flores.com.br', 'Lab Flores'),
(null, '24.786.655/0001-44', '02577040', 'Rua das Pratas', 'contato@pratalab.com.br', 'Prata Lab'),
(null, '28.897.897/0001-56', '02840080', 'Rua das Ouro', 'contato@vacsis.com.br', 'VacSis'),
(null, '13.452.320/0001-20', '02850010', 'Avenida Souza Aranha', 'faleconosco@mimosk.com.br', 'Mimosk Pharmacs');

select * from Fabricante;

insert into Colaborador values
(null, 'Mariana Carvalho', 'mariana.carvalho@gmail.com', 2),
(null, 'Inara Leticia Silva', 'leticia.inarasilva@hotmail.com', 3),
(null, 'Ramon Cortez', 'cortez_ramon@yahoo.com.br', 4),
(null, 'Cleo Ramirez', 'ramires123@gmail.com.br', 2),
(null, 'Claudia Santos', 'claudia.ca@hotmail.com', 3),
(null, 'Nando carvalho', 'carvalhon@mimosk.com.br', 5),
(null, 'Danielli Soares', 'danielli.soares@vacsis.com.br', 4),
(null, 'Pedro Andrade', 'andade,pedro@patos.com.br', 1),
(null, 'Alexandra Neves', 'neves.alexandra@flores.com.br', 2),
(null, 'Joaquim Arantes', 'joaquim@pratalab.com.br', 3),
(null, 'Rafaella Santos', 'rafa.santos@hotmail.com', 4),
(null, 'Carlos Astaro', 'astaro.carlos007@gmail.com', 1),
(null, 'Agnaldo Ackes', 'agnaldo@patos.com.br', 1);

insert into Colaborador values
(null, 'Larissa Alves', 'larissa_alves@mimosk.com.br', 5),
(null, 'Pedro João Braga', 'pj.braga@mimosk.com.br', 5);

select * from Colaborador;

select * from Colaborador join fabricante on idFabricante = fkFabricante;

insert into Geladeira values
(null, 'ativo', '2º', 5, 1),
(null, 'ativo', '2º', 2, 1),
(null, 'manutenção', '5º', 13, 1),
(null, 'inativo', '5º', 13, 1),
(null, 'manutenção', '6º', 3, 2),
(null, 'ativo', '7º', 3, 2),
(null, 'inativo', '4º', 10, 2),
(null, 'ativo', '4º', 10, 2),
(null, 'ativo', '8º', 12, 3),
(null, 'manutenção', '8º', 12, 3),
(null, 'ativo', '9º', 12, 3),
(null, 'inativo', '9º', 12, 3),
(null, 'ativo', '4º', 6, 4),
(null, 'manutenção', '4º', 6, 4),
(null, 'inativo', '4º', 6, 4),
(null, 'ativo', '4º', 6, 4),
(null, 'ativo', '1º', 2, 5),
(null, 'inativo', '1º', 2, 5),
(null, 'ativo', '1º', 2, 5),
(null, 'ativo', '1º', 2, 5);

select * from geladeira;
select * from fabricante join geladeira on fkFabricante=idFabricante 
	join colaborador as colab on colab.fkFabricante=idFabricante order by idFabricante desc; 
select * from colaborador join fabricante on fkFabricante=idFabricante 
	join geladeira as g on g.fkFabricante=idFabricante order by idColaborador; 

select * from Geladeira;
select * from Colaborador;
select * from Fabricante;
desc sensor;

insert into Sensor values
(null, 'inativo', 1),
(null, 'ativo', 1),
(null, 'inativo', 2),
(null, 'ativo', 2),
(null, 'manutenção', 3),
(null, 'ativo', 3),
(null, 'ativo', 4),
(null, 'ativo', 4),
(null, 'ativo', 5),
(null, 'ativo', 5),
(null, 'ativo', 6),
(null, 'manutenção', 6),
(null, 'ativo', 7),
(null, 'ativo', 7),
(null, 'manutenção', 8),
(null, 'ativo', 8),
(null, 'inativo', 9),
(null, 'manutenção', 9),
(null, 'ativo', 10),
(null, 'inativo', 10),
(null, 'ativo', 11),
(null, 'ativo', 11),
(null, 'manutenção', 12),
(null, 'ativo', 12),
(null, 'ativo', 13),
(null, 'manutenção', 13),
(null, 'ativo', 14),
(null, 'ativo', 14),
(null, 'ativo', 15),
(null, 'inativo', 15),
(null, 'ativo', 16),
(null, 'manutenção', 16),
(null, 'ativo', 17),
(null, 'ativo', 17),
(null, 'inativo', 18),
(null, 'manutenção', 18),
(null, 'ativo', 19),
(null, 'inativo', 19),
(null, 'manutenção', 20),
(null, 'ativo', 20);

select * from geladeira join sensor on fkgeladeira=idgeladeira;

select * from sensor;
desc medida;
select * from medida;

insert into medida values
(null, 5, 1, current_timestamp(), 1),
(null, 3, 2, current_timestamp(), 2),
(null, 4, 1, current_timestamp(), 3),
(null, 0.2, 1.9, current_timestamp(), 4),
(null, 2.1, 2.2, current_timestamp(), 5),
(null, 6.1, 0.9, current_timestamp(), 6),
(null, 6.1, 1.4, current_timestamp(), 7),
(null, 6.7, 1, current_timestamp(), 8),
(null, 4.2, 3.1, current_timestamp(), 9),
(null, 3, 2.3, current_timestamp(), 10),
(null, 5.1, 2.1, current_timestamp(), 11),
(null, 5, 1, current_timestamp(), 12),
(null, 3, 2, current_timestamp(), 13),
(null, 2, 4, current_timestamp(), 14),
(null, 5.2, 3.8, current_timestamp(), 15),
(null, 5.1, 3.1, current_timestamp(), 16),
(null, 5.7, 1.8, current_timestamp(), 17),
(null, 0.7, 1.1, current_timestamp(), 18),
(null, 2, 0.6, current_timestamp(), 19),
(null, 2.8, 4.9, current_timestamp(), 20),
(null, 3.2, 1.9, current_timestamp(), 21),
(null, 4.1, 2.1, current_timestamp(), 22),
(null, 2.1, 3.1, current_timestamp(), 23),
(null, 4.4, 2.1, current_timestamp(), 24),
(null, 5, 1, current_timestamp(), 25),
(null, 1.1, 3, current_timestamp(), 26),
(null, 6, 0.2, current_timestamp(), 27),
(null, 2, 1, current_timestamp(), 28),
(null, 4.1, 2.5, current_timestamp(), 29),
(null, 3, 2.3, current_timestamp(), 30),
(null, 3.2, 2, current_timestamp(), 31),
(null, 2.2, 2, current_timestamp(), 32),
(null, 0.9, 5.5, current_timestamp(), 33),
(null, 4.4, 3.4, current_timestamp(), 34),
(null, 4, 1.2, current_timestamp(), 35),
(null, 2.5, 1.1, current_timestamp(), 36),
(null, 3.4, 2.2, current_timestamp(), 37),
(null, 1, 0.5, current_timestamp(), 38),
(null, 4, 3, current_timestamp(), 39),
(null, 1, 2, current_timestamp(), 40);

select idSensor,statusSensor,fkSensor,idMedida,temperatura,umidade,data_hora,idGeladeira,andarGeladeira,salaGeladeira from sensor 
	join Medida on fkSensor=idSensor join geladeira on fkGeladeira=idGeladeira;
    
select * from vacina;
desc vacina;

insert into vacina values
(null, 'Contra Covid-19', 5, 1, '2022-02-12'),
(null, 'BCG', 5, 1, '2022-11-22'),
(null, 'Tríplice Viral', 5, 1, '2021-12-05'),
(null, 'Dupla Viral', 5, 1, '2022-10-10'),
(null, 'Contra Febre Amarela', 5, 1, '2022-12-12'),
(null, 'Contra Hepatite B', 5, 1, '2022-06-07'),
(null, 'Dupla Adulto', 5, 1, '2022-11-15'),
(null, 'Oral Contra Poliomelite', 5, 1, '2022-01-23'),
(null, 'Tríplice bacteriana', 5, 1, '2022-03-04'),
(null, 'Tetravalente', 5, 1, '2022-10-10'),
(null, 'Contra Influenza', 5, 1, '2022-07-07'),
(null, 'Rotavirús Humano', 5, 1, '2022-09-17'),
(null, 'Contra Raiva-Cultivo Celular', 5, 1, '2022-08-09'),
(null, 'Contra Meningocócica Conjugada', 5, 1, '2022-04-04');