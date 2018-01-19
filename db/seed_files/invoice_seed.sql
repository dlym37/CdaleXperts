CREATE TABLE invoice (
    invoiceId SERIAL PRIMARY KEY,
    customerId INT,
    invoiceDate DATE,
    billingAdress VARCHAR(70),
    billingCity VARCHAR(40),
    billingState VARCHAR(40),
    billingCountry VARCHAR(40),
    billingPostalCode VARCHAR(10),
    total NUMERIC(10,2)
)