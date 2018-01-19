select * from mountain
join mountainparts on mountain.id = mountainparts.id
where partid = $1