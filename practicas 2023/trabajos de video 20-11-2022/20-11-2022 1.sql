select * from prueba where nombre like 'Ga%'
select * from prueba where nombre like '%th'
select * from prueba where nombre like '%da%'
select * from prueba where nombre like '%_da_%'
select * from prueba where nombre like '_da%'
select * from prueba where nombre like 'A%'
select * from prueba where nombre like '%e'

select * from (
select * from prueba where nombre not like 'A%') as a 
where a.nombre not like '%a%'

select nombre,
case when length(nombre) < 8 then 'Nombrecorte'
else 'NombreLargo' end as EvaluandoLongitud
from prueba where character_length(nombre) < 8

select count(*) from prueba character_length(nombre) < 8