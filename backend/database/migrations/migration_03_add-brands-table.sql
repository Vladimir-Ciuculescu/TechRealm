
DROP TABLE IF EXISTS brands;
CREATE TABLE public.brands (
	id serial4 NOT NULL,
	"name" varchar(250) NOT NULL
);

INSERT INTO public.brands (id, "name") VALUES(1, 'Apple');
INSERT INTO public.brands (id, "name") VALUES(2, 'Sony');
INSERT INTO public.brands (id, "name") VALUES(3, 'Amazon');

