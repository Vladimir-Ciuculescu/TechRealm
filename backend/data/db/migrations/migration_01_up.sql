create extension pgcrypto;

--Create user type
create type userRole as enum('admin', 'client');

create type paymentType as enum ('cash', 'card');

--Add users table
create table users (
	id serial primary key,
	name varchar(50) not null,
	email varchar(50) not null unique,
	password varchar(50) not null,
	role userRole
)

alter table USERS
alter column password type varchar(250)

--Add products table 
create table products (
	id serial4 primary key,
	name varchar(100) not null,
	image varchar(100) not null,
	brand varchar(50) not null,
	category varchar(50) not null,
	description varchar(250),
	rating numeric default 0,
	numberOfReviews numeric default 0,
	price numeric not null,
	countInStock numeric not null default 0,
	user_id integer not null references users(id) on delete cascade
	
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

drop table users ;
drop table products;
drop table reviews;
drop table orders;


--insert users
insert into users (name, email, password, role) values ('anda', 'anda@ceva.com', crypt('vladi32t23r', gen_salt('bf')), 'admin');
insert into users (name, email, password, role) values ('radu', 'radu@ceva.com', 'radui32t1241', 'admin');
insert into users (name, email, password, role) values ('maria', 'marioara@da.com', 'mariaa_29', 'admin');


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




