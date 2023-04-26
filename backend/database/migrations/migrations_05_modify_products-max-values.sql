
-- Modify price and rating of the products.
--Price has a maximum of 4 digits and 2 decimals
--Rating has a maximum of 2 digits and 2 decimals
ALTER TABLE PRODUCTS 
alter column price TYPE numeric(6,2),
alter column rating TYPE numeric(4,2);