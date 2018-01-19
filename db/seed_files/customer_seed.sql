CREATE TABLE customer (
    customerId SERIAL PRIMARY KEY,
    invoiceId INT,
    firstName VARCHAR(40),
    lastName VARCHAR(20),
    address VARCHAR(70),
    city VARCHAR(40),
    state VARCHAR(40),
    country VARCHAR(40),
    postalCode VARCHAR(10),
    phone VARCHAR(24),
    email VARCHAR(60)
    )
