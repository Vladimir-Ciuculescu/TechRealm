-- public.brands definition

-- Drop table

-- DROP TABLE public.brands;

CREATE TABLE public.brands (
	id serial4 NOT NULL,
	"name" varchar(250) NOT NULL
);

-- public.product_categories definition

-- Drop table

-- DROP TABLE public.product_categories;

CREATE TABLE public.product_categories (
	id serial4 NOT NULL,
	"name" varchar(250) NOT NULL
);  

-- public.product_images definition

-- Drop table

-- DROP TABLE public.product_images;

CREATE TABLE public.product_images (
	id serial4 NOT NULL,
	url varchar(512) NULL,
	product_id int4 NOT NULL,
	CONSTRAINT product_images_pkey PRIMARY KEY (id)
);


-- public.product_images foreign keys

ALTER TABLE public.product_images ADD CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


-- public.products definition

-- Drop table

-- DROP TABLE public.products;

CREATE TABLE public.products (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	brand varchar(50) NOT NULL,
	description varchar(250) NULL,
	rating numeric(4, 2) NULL DEFAULT 0,
	number_of_reviews int4 NULL DEFAULT 0,
	price numeric(6, 2) NOT NULL,
	count_in_stock int4 NOT NULL DEFAULT 0,
	category varchar(255) NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- public.user_products definition

-- Drop table

-- DROP TABLE public.user_products;

CREATE TABLE public.user_products (
	user_id int4 NOT NULL,
	product_id int4 NOT NULL,
	product_quantity int4 NOT NULL,
	CONSTRAINT user_products_pkey PRIMARY KEY (user_id, product_id)
);


-- public.user_products foreign keys

ALTER TABLE public.user_products ADD CONSTRAINT user_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE;
ALTER TABLE public.user_products ADD CONSTRAINT user_products_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE;

-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial4 NOT NULL,
	email varchar(50) NOT NULL,
	"password" varchar(250) NOT NULL,
	"role" public."user_role" NULL,
	first_name varchar(25) NULL,
	last_name varchar(25) NULL,
	"gender" public."gender_enum" NULL,
	photo varchar(250) NULL,
	avatar_color varchar(20) NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id)
);