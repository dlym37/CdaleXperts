INSERT INTO customer
(firstname, lastname, auth_id)
VALUES
($1, $2, $3)
RETURNING *;