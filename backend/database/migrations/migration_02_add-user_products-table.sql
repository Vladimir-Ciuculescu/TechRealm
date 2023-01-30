--Create join table between users and products
DROP TABLE IF EXISTS user_products;
CREATE TABLE public.user_products (
	user_id int4 NOT NULL,
	product_id int4 NOT NULL,
	CONSTRAINT user_products_pkey PRIMARY KEY (user_id, product_id)
);
ALTER TABLE public.user_products ADD CONSTRAINT user_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE;
ALTER TABLE public.user_products ADD CONSTRAINT user_products_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE;

--Insert some data into table
insert into user_products (user_id, product_id) values (58, 10);
insert into user_products (user_id, product_id) values (58, 14);
insert into user_products (user_id, product_id) values (58, 7);
insert into user_products (user_id, product_id) values (59, 10);
insert into user_products (user_id, product_id) values (60, 10);


