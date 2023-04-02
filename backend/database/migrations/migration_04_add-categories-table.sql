ALTER TABLE products
ALTER COLUMN category type varchar(255)

DROP TYPE categories_enum

DROP TABLE IF EXISTS product_categories;

--Create table product_categories
CREATE TABLE public.product_categories (
	id serial4 NOT NULL,
	"name" varchar(250) NOT NULL
);

--Add categories in DB
INSERT INTO public.product_categories
(id, "name")
VALUES(1, 'Smartphone');
INSERT INTO public.product_categories
(id, "name")
VALUES(2, 'TV');
INSERT INTO public.product_categories
(id, "name")
VALUES(3, 'Accesories');
INSERT INTO public.product_categories
(id, "name")
VALUES(4, 'Gadgets');
INSERT INTO public.product_categories
(id, "name")
VALUES(5, 'Gaming');

