CREATE TABLE invoiceLine (
    invoiceLinId SERIAL PRIMARY KEY,
    invoiceId INT,
    trackId INT,
    unitPrice NUMERIC(10,2),
    quantity INT
)
