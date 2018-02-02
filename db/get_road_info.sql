select * from road
join roadparts on road.id = roadparts.partid
where partid = $1