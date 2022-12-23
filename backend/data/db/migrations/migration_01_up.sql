--Create extension
create extension pgcrypto;

--Create user type
create type userRole as enum('admin', 'client');

--Create payment type
create type paymentType as enum ('cash', 'card');

--Add users table

create table users (
	id serial primary key,
	name varchar(50) not null,
	email varchar(50) not null unique,
	password varchar(250) not null,
	role userRole
)

--Populate users table
insert into users (name, email, password, role) values ('anda', 'anda@ceva.com', crypt('vladi32t23r', gen_salt('bf')), 'admin');
insert into users (name, email, password, role) values ('radu', 'radu@ceva.com', crypt('parola', gen_salt('bf')), 'admin');
insert into users (name, email, password, role) values ('maria', 'marioara@da.com', crypt('parola', gen_salt('bf')), 'admin');


--Add products table 
create table products (
	id serial4 primary key,
	name varchar(100) not null,
	brand varchar(50) not null,
	category varchar(50) not null,
	description varchar(250),
	rating numeric(3,2) default 0,
	number_of_reviews int4 default 0,
	price numeric(3,2) not null,
	count_in_stock int4 not null default 0,
	user_id integer not null references users(id) on delete cascade,
)

--Populate products table
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(7, 'Airpods Wireless Bluetooth Headphones', 'Apple', 'Electronics', 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
5.00, 12, 9.99, 10, 1);
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(13, 'Amazon Echo Dot 3rd Generation', 'Amazon', 'Electronics', 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space'
, 4.00, 12, 3.55, 0, 1);
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(8, 'iPhone 11 Pro 256GB Memory', 'Apple', 'Electronics', 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life'
, 4, 8, 6.57, 7, 1);
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(9, 'Cannon EOS 80D DSLR Camera', 'Cannon', 'Electronics', 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
3.00, 12, 9.30, 5, 1);
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(10, 'Logitech G-Series Gaming Mouse', 'Logitech', 'Electronics', 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience'
, 4.00, 10, 5.56, 7, 1);
INSERT INTO public.products
(id, "name", brand, category, description, rating, number_of_reviews, price, count_in_stock, user_id)
VALUES(14, 'Sony Playstation 4 Pro White Version', 'Sony', 'Electronics', 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
4.56, 12, 4.20, 11, 1);

create table product_images (
	id serial4 primary key,
	url varchar(250),
	product_id integer not null references products(id) on delete cascade
)






-- Add reviews table
create table reviews (
	id serial4 primary key,
	comment varchar(100) not null,
	rating numeric not null constraint max_value check (rating <=5 ) ,
	product_id integer not null references products(id) on delete cascade,
	user_id integer not null references users(id) on delete cascade
)

-- Add addresses table 
create table addresses (
	id serial4 primary key,
	country varchar(50) not null,
	city varchar(50) not null,
	street varchar(100) not null,
	address_number numeric not null,
	postalCode varchar(100)
)



-- Add orders table
create table orders (
	id serial4 primary key,
	user_id integer not null references users(id) on delete cascade,
	address_id integer not null references addresses(id) on delete cascade,
	payment_method paymentType
)


--insert products
insert into products (name, image, brand, category, description, price, user_id) 
values ('iphone', 'awdaw', 'apple', 'electronics', 'phone smart', 100, 1);

insert into products (name, image, brand, category, description, price, user_id) 
values ('a7', 'awdaw', 'audi', 'electronics', 'super car', 100, 2);

insert into products (name, image, brand, category, description, price, user_id) 
values ('dishwasher', 'awdaw', 'electrolux', 'electronics', 'dishwasher', 100, 1);

truncate reviews 

insert into reviews(comment, rating, product_id, user_id) values ('Recomand', 5, 2, 1)
insert into reviews(comment, rating, product_id, user_id) values ('Radu nu recomanda', 4, 3, 2)


select u."name", p."name", r."comment" 
from users u 
inner join products p  on u.id = p.user_id 
inner join reviews r  on r.user_id  = u.id
where u.id = 1



