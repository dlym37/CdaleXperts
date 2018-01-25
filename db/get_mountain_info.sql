select * from mountain
join mountainparts on mountain.id = mountainparts.partid
where partid = $1