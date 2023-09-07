create table public.ejemplo(
nombre varchar(30),
apellido varchar(10),
telefono integer
);

select * from public.personas p 

--como cambiar el nombre a campo de una tabla 
alter table public.ejemplo rename column nombre to nombre_completo;

--cambiar el nombre a la tabla 
alter table ejemplo rename to personas 

--cambiar el tipo de campo de una tabla
alter table public.personas alter column indentificacion set data type int8

--eliminar campo telefono 
alter table public.personas drop column telefono

select * from public.personas p 

INSERT INTO public.personas
(nombre_completo, apellido, indentificacion)
VALUES('Juan', 'Perez', 52);

INSERT INTO public.personas
(nombre_completo, apellido)
VALUES('Juan', 'Perez');



create table libros(
codigo serial,{{{{
nombre varchar(30),
autor varchar(30),
primary key (codigo)
);

select * from libros 
select p.nombre, p.auto from libros p where codigo=1

update public.libros set autor='juan'
update public.libros set nombre='yyyy' where autor='juan'

---------------------------------

select  * from personas 
delete from public.personas 

insert into public.libros 
(nombre, autor )
values('xxxxxxxxxxxxxxxxx', 'yyyyyyy') 














create table public.departamento(
codigo integer primary key,
nombre varchar(30)
)

insert into public.departamento(codigo,nombre)
values
(1,'Marketing'),
(2,'Tecnologua'),
(3,'Administracion');

select * from  public.departamento


create table public.empleado(
codigo integer primary key,
nombre varchar(30)
)


create table public.empleado (
indentificacion integer primary key,
nombre varchar(30),
apellido varchar(30),
salario integer,
codigo_departamento integer,
constraint fk_departamento foreign key(codigo_departamento) references despartamento (codigo)
)

