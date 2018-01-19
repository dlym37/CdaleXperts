UPDATE invoiceLine
set quantity = $1
WHERE invoieId = $2 and trackId = $3;